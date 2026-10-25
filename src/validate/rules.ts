/**
 * Integrity rules for the breed catalog.
 *
 * Runs on the TypeScript records before `data.json` is written. Every rule
 * here exists to stop a specific kind of dishonest data: a placeholder
 * instead of `null`, a "verified" claim with no source, a verification date
 * in the future, a null value presented as a fact, or a photograph that is
 * missing or lacks a license that clearly allows commercial use.
 */

import {
  EVIDENCE_ROLES,
  FACT_PATHS,
  HEIGHT_UNITS,
  RELIABILITIES,
  SOURCE_TYPES,
  VERIFIED_RELIABILITIES,
  WEIGHT_UNITS,
  type Breed,
  type Evidence,
  type FactPath,
  type HeightUnit,
  type License,
  type NumericRange,
  type Reliability,
  type Source,
  type WeightUnit,
} from "../schema/breed.types";

export interface CatalogInput {
  breeds: readonly Breed[];
  sources: Readonly<Record<string, Source>>;
  licenses: Readonly<Record<string, License>>;
}

export interface Issue {
  severity: "error" | "warning";
  /** Breed slug, or null for registry-level issues. */
  breed: string | null;
  path: string;
  message: string;
}

export interface ValidationResult {
  errors: Issue[];
  warnings: Issue[];
}

const ID_PATTERN = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const URL_PATTERN = /^https?:\/\/\S+$/;
const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const PLACEHOLDER_PATTERN =
  /^(?:n\/?a|none|null|unknown|unspecified|tbd|tba|todo|-+|\?+|\.+)$/i;

const LIMITS = {
  lifespanYears: { min: 1, max: 60 },
  minutesPerDay: { min: 1, max: 600 },
} as const;

const HEIGHT_LIMITS: Record<HeightUnit, { min: number; max: number }> = {
  cm: { min: 1, max: 160 },
  m: { min: 0.01, max: 1.6 },
  in: { min: 0.4, max: 63 },
};

const WEIGHT_LIMITS: Record<WeightUnit, { min: number; max: number }> = {
  kg: { min: 0.1, max: 120 },
  lb: { min: 0.2, max: 265 },
};

/** Leaf fact paths: every path that is not a prefix of another path. */
export const LEAF_FACT_PATHS: readonly FactPath[] = FACT_PATHS.filter(
  (path) => !FACT_PATHS.some((other) => other.startsWith(`${path}.`)),
);

export function validateCatalog(
  input: CatalogInput,
  today: string = isoToday(),
): ValidationResult {
  const issues: Issue[] = [];
  const push = (
    severity: Issue["severity"],
    breed: string | null,
    path: string,
    message: string,
  ) => issues.push({ severity, breed, path, message });
  const error = (breed: string | null, path: string, message: string) =>
    push("error", breed, path, message);
  const warn = (breed: string | null, path: string, message: string) =>
    push("warning", breed, path, message);

  validateSources(input.sources, today, error);
  validateLicenses(input.licenses, error);

  const usedSources = new Set<string>();
  const slugs = new Map<string, number>();

  input.breeds.forEach((breed, index) => {
    const slug = typeof breed.slug === "string" ? breed.slug : `#${index}`;
    if (!SLUG_PATTERN.test(slug)) {
      error(slug, "slug", `Slug must be kebab-case: ${JSON.stringify(slug)}`);
    }
    slugs.set(slug, (slugs.get(slug) ?? 0) + 1);
    validateBreed(breed, slug, input, today, usedSources, error);
  });

  for (const [slug, count] of slugs) {
    if (count > 1) error(slug, "slug", `Slug appears ${count} times`);
  }
  for (const id of Object.keys(input.sources)) {
    if (!usedSources.has(id)) {
      warn(null, `sources.${id}`, "Source is not referenced by any breed");
    }
  }

  return {
    errors: issues.filter((issue) => issue.severity === "error"),
    warnings: issues.filter((issue) => issue.severity === "warning"),
  };
}

// ---------------------------------------------------------------------------
// Registries
// ---------------------------------------------------------------------------

type Report = (breed: string | null, path: string, message: string) => void;

function validateSources(
  sources: Readonly<Record<string, Source>>,
  today: string,
  error: Report,
): void {
  const urls = new Map<string, string>();
  for (const [id, source] of Object.entries(sources)) {
    const at = `sources.${id}`;
    if (!ID_PATTERN.test(id)) error(null, at, "Source id must be kebab-case");
    requireText(source.name, null, `${at}.name`, error);
    if (!URL_PATTERN.test(source.url)) {
      error(null, `${at}.url`, `Not an http(s) URL: ${source.url}`);
    }
    const existing = urls.get(source.url);
    if (existing) {
      error(null, `${at}.url`, `Same URL as source "${existing}"`);
    } else {
      urls.set(source.url, id);
    }
    if (!SOURCE_TYPES.includes(source.type)) {
      error(null, `${at}.type`, `Unknown source type ${String(source.type)}`);
    }
    optionalDate(source.publishedOn, today, null, `${at}.publishedOn`, error);
    optionalDate(source.accessedOn, today, null, `${at}.accessedOn`, error);
    optionalText(source.note, null, `${at}.note`, error);
  }
}

function validateLicenses(
  licenses: Readonly<Record<string, License>>,
  error: Report,
): void {
  for (const [id, license] of Object.entries(licenses)) {
    const at = `licenses.${id}`;
    if (!ID_PATTERN.test(id)) error(null, at, "License id must be kebab-case");
    requireText(license.name, null, `${at}.name`, error);
    optionalText(license.spdx, null, `${at}.spdx`, error);
    if (license.url !== null && !URL_PATTERN.test(license.url)) {
      error(null, `${at}.url`, `Not an http(s) URL: ${license.url}`);
    }
    for (const key of [
      "commercialUseAllowed",
      "attributionRequired",
      "shareAlikeRequired",
    ] as const) {
      const value = license[key];
      if (value !== null && typeof value !== "boolean") {
        error(null, `${at}.${key}`, "Must be true, false, or null");
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Breeds
// ---------------------------------------------------------------------------

function validateBreed(
  breed: Breed,
  slug: string,
  input: CatalogInput,
  today: string,
  usedSources: Set<string>,
  error: Report,
): void {
  requireText(breed.name, slug, "name", error);
  requireDate(breed.updatedOn, today, slug, "updatedOn", error);
  walkStrings(breed, slug, "", error);

  // Measurements
  bySex(
    breed.physical.height,
    HEIGHT_UNITS,
    HEIGHT_LIMITS,
    slug,
    "physical.height",
    error,
  );
  bySex(
    breed.physical.weight,
    WEIGHT_UNITS,
    WEIGHT_LIMITS,
    slug,
    "physical.weight",
    error,
  );
  range(
    breed.physical.lifespanYears,
    LIMITS.lifespanYears,
    slug,
    "physical.lifespanYears",
    error,
  );
  range(
    breed.care.exercise.minutesPerDay,
    LIMITS.minutesPerDay,
    slug,
    "care.exercise.minutesPerDay",
    error,
  );

  // Scores
  for (const [key, score] of Object.entries(breed.temperament.scores)) {
    if (score === null) continue;
    if (!Number.isInteger(score) || score < 1 || score > 5) {
      error(slug, `temperament.scores.${key}`, `Score must be 1–5 or null, got ${score}`);
    }
  }

  // FAQ
  breed.faq.forEach((faq, index) => {
    requireText(faq.question, slug, `faq[${index}].question`, error);
    requireText(faq.answer, slug, `faq[${index}].answer`, error);
  });

  validateImages(breed, slug, input.licenses, today, error);
  validateReferences(breed, slug, input.sources, usedSources, error);
  validateEvidence(breed, slug, input.sources, today, error);
  validateCoverage(breed, slug, error);
}

function validateImages(
  breed: Breed,
  slug: string,
  licenses: Readonly<Record<string, License>>,
  today: string,
  error: Report,
): void {
  if (breed.images.length === 0) {
    error(
      slug,
      "images",
      "At least one photograph is required, and its license must clearly allow commercial use.",
    );
  }
  const urls = new Set<string>();
  breed.images.forEach((image, index) => {
    const at = `images[${index}]`;
    if (!URL_PATTERN.test(image.url)) {
      error(slug, `${at}.url`, `Not an http(s) URL: ${image.url}`);
    }
    if (urls.has(image.url)) {
      error(slug, `${at}.url`, "Duplicate image URL within the breed");
    }
    urls.add(image.url);
    if (image.sourcePage !== null && !URL_PATTERN.test(image.sourcePage)) {
      error(slug, `${at}.sourcePage`, `Not an http(s) URL: ${image.sourcePage}`);
    }
    const hasWidth = image.width !== null;
    const hasHeight = image.height !== null;
    if (hasWidth !== hasHeight) {
      error(slug, `${at}.width`, "Width and height must both be set or both be null");
    }
    for (const key of ["width", "height"] as const) {
      const value = image[key];
      if (value !== null && (!Number.isInteger(value) || value <= 0)) {
        error(slug, `${at}.${key}`, `Must be a positive integer, got ${value}`);
      }
    }
    optionalDate(image.capturedOn, today, slug, `${at}.capturedOn`, error);
    optionalDate(image.uploadedOn, today, slug, `${at}.uploadedOn`, error);
    optionalDate(image.metadataCheckedOn, today, slug, `${at}.metadataCheckedOn`, error);

    if (image.licenseId === null) {
      error(
        slug,
        `${at}.licenseId`,
        "No license recorded. Leave this photograph out unless commercial use is clearly allowed.",
      );
      return;
    }
    const license = licenses[image.licenseId];
    if (!license) {
      error(slug, `${at}.licenseId`, `Unknown license "${image.licenseId}"`);
      return;
    }
    if (license.commercialUseAllowed !== true) {
      error(
        slug,
        `${at}.licenseId`,
        `License ${image.licenseId} does not clearly allow commercial use. Leave this photograph out.`,
      );
    }
    if (license.attributionRequired === true && image.attribution === null) {
      error(
        slug,
        `${at}.attribution`,
        `License ${image.licenseId} requires attribution but none is recorded`,
      );
    }
  });
}

function validateReferences(
  breed: Breed,
  slug: string,
  sources: Readonly<Record<string, Source>>,
  usedSources: Set<string>,
  error: Report,
): void {
  const seen = new Set<string>();
  breed.references.forEach((id, index) => {
    if (!(id in sources)) {
      error(slug, `references[${index}]`, `Unknown source "${id}"`);
    }
    if (seen.has(id)) {
      error(slug, `references[${index}]`, `Source "${id}" listed twice`);
    }
    seen.add(id);
    usedSources.add(id);
  });
  for (const [path, claim] of Object.entries(breed.evidence)) {
    for (const ref of claim.sources) {
      if (!seen.has(ref.id) && ref.id in sources) {
        error(
          slug,
          `evidence.${path}`,
          `Source "${ref.id}" is used as evidence but is missing from references`,
        );
      }
    }
  }
}

function validateEvidence(
  breed: Breed,
  slug: string,
  sources: Readonly<Record<string, Source>>,
  today: string,
  error: Report,
): void {
  for (const [rawPath, claim] of Object.entries(breed.evidence)) {
    const at = `evidence.${rawPath}`;
    if (!(FACT_PATHS as readonly string[]).includes(rawPath)) {
      error(slug, at, "Not a known fact path");
      continue;
    }
    const path = rawPath as FactPath;
    if (!RELIABILITIES.includes(claim.reliability)) {
      error(slug, at, `Unknown reliability ${String(claim.reliability)}`);
      continue;
    }
    optionalText(claim.note, slug, `${at}.note`, error);
    optionalDate(claim.verifiedOn, today, slug, `${at}.verifiedOn`, error);

    const ids = new Set<string>();
    let verifiedCount = 0;
    let verifiedStandardCount = 0;
    for (const ref of claim.sources) {
      const source = sources[ref.id];
      if (!source) {
        error(slug, at, `Unknown source "${ref.id}"`);
        continue;
      }
      if (ids.has(ref.id)) error(slug, at, `Source "${ref.id}" listed twice`);
      ids.add(ref.id);
      if (!EVIDENCE_ROLES.includes(ref.role)) {
        error(slug, at, `Unknown evidence role ${String(ref.role)}`);
      }
      optionalText(ref.locator, slug, `${at}.sources.${ref.id}.locator`, error);
      if (ref.role === "verified") {
        verifiedCount += 1;
        if (source.type === "official_breed_standard") verifiedStandardCount += 1;
      }
    }

    const isVerified = (VERIFIED_RELIABILITIES as readonly Reliability[]).includes(
      claim.reliability,
    );
    if (isVerified) {
      if (verifiedCount === 0) {
        error(slug, at, `${claim.reliability} needs at least one source with role "verified"`);
      }
      if (claim.verifiedOn === null) {
        error(slug, at, `${claim.reliability} needs a verifiedOn date`);
      }
      if (claim.reliability === "official_standard" && verifiedStandardCount === 0) {
        error(
          slug,
          at,
          'official_standard needs a "verified" source of type official_breed_standard',
        );
      }
    } else {
      if (verifiedCount > 0) {
        error(slug, at, `${claim.reliability} cannot have a source with role "verified"`);
      }
      if (claim.verifiedOn !== null) {
        error(slug, at, `${claim.reliability} cannot carry a verifiedOn date`);
      }
    }

    const absent = isAbsent(valueAt(breed, path));
    if (claim.reliability === "unavailable" && !absent) {
      error(slug, at, "Claimed unavailable, but a value is recorded at this path");
    }
    if (claim.reliability !== "unavailable" && absent) {
      error(slug, at, "A claim is made, but nothing is recorded at this path");
    }
  }
}

function validateCoverage(breed: Breed, slug: string, error: Report): void {
  for (const leaf of LEAF_FACT_PATHS) {
    const resolved = resolveEvidence(breed.evidence, leaf);
    const absent = isAbsent(valueAt(breed, leaf));
    if (!resolved) {
      error(
        slug,
        leaf,
        absent
          ? 'No value recorded and no claim. Add an "unavailable" claim.'
          : "Value recorded without a reliability claim",
      );
      continue;
    }
    if (absent && resolved.claim.reliability !== "unavailable") {
      error(
        slug,
        leaf,
        `No value recorded, but inherits "${resolved.claim.reliability}" from ${resolved.path}. Add an "unavailable" claim for this leaf.`,
      );
    }
    if (!absent && resolved.claim.reliability === "unavailable") {
      error(
        slug,
        leaf,
        `A value is recorded, but ${resolved.path} is claimed unavailable`,
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Path helpers (shared with the report)
// ---------------------------------------------------------------------------

export function resolveEvidence(
  evidence: Breed["evidence"],
  path: FactPath,
): { path: FactPath; claim: Evidence } | null {
  let current: string = path;
  for (;;) {
    const claim = evidence[current as FactPath];
    if (claim) return { path: current as FactPath, claim };
    const dot = current.lastIndexOf(".");
    if (dot < 0) return null;
    current = current.slice(0, dot);
  }
}

export function valueAt(record: unknown, path: string): unknown {
  let current: unknown = record;
  for (const key of path.split(".")) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

/** `null`, `undefined`, an empty list, or an object whose values are all absent. */
export function isAbsent(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") {
    return Object.values(value as Record<string, unknown>).every(isAbsent);
  }
  return false;
}

// ---------------------------------------------------------------------------
// Primitive checks
// ---------------------------------------------------------------------------

function requireText(
  value: unknown,
  breed: string | null,
  path: string,
  error: Report,
): void {
  if (typeof value !== "string" || value.trim().length === 0) {
    error(breed, path, "Required text is missing or empty");
    return;
  }
  checkText(value, breed, path, error);
}

function optionalText(
  value: unknown,
  breed: string | null,
  path: string,
  error: Report,
): void {
  if (value === null || value === undefined) return;
  requireText(value, breed, path, error);
}

function checkText(value: string, breed: string | null, path: string, error: Report): void {
  if (value !== value.trim()) {
    error(breed, path, "Text has leading or trailing whitespace");
  }
  if (value.trim().length === 0) {
    error(breed, path, 'Empty text. Use null instead of ""');
  }
  if (PLACEHOLDER_PATTERN.test(value.trim())) {
    error(breed, path, `Placeholder text ${JSON.stringify(value)}. Use null instead`);
  }
}

/** Checks every string anywhere in the record (lists, prose, nested objects). */
function walkStrings(value: unknown, breed: string, path: string, error: Report): void {
  if (typeof value === "string") {
    checkText(value, breed, path || "(root)", error);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkStrings(item, breed, `${path}[${index}]`, error));
    return;
  }
  if (value !== null && typeof value === "object") {
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      walkStrings(item, breed, path ? `${path}.${key}` : key, error);
    }
  }
}

function requireDate(
  value: unknown,
  today: string,
  breed: string | null,
  path: string,
  error: Report,
): void {
  if (typeof value !== "string") {
    error(breed, path, "Date is required");
    return;
  }
  const match = DATE_PATTERN.exec(value);
  if (!match) {
    error(breed, path, `Date must be YYYY-MM-DD, got ${JSON.stringify(value)}`);
    return;
  }
  const [, y, m, d] = match;
  const year = Number(y);
  const month = Number(m);
  const day = Number(d);
  const date = new Date(Date.UTC(year, month - 1, day));
  const real =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day;
  if (!real) {
    error(breed, path, `Not a calendar date: ${value}`);
    return;
  }
  if (year < 1964) error(breed, path, `Implausible date: ${value}`);
  if (value > today) error(breed, path, `Date ${value} is in the future (today is ${today})`);
}

function optionalDate(
  value: unknown,
  today: string,
  breed: string | null,
  path: string,
  error: Report,
): void {
  if (value === null || value === undefined) return;
  requireDate(value, today, breed, path, error);
}

function range(
  value: NumericRange | null,
  bounds: { min: number; max: number } | null,
  breed: string,
  path: string,
  error: Report,
): void {
  if (value === null) return;
  const { min, max } = value;
  if (min === null && max === null) {
    error(breed, path, "Range has no bounds. Use null for the whole range");
    return;
  }
  for (const [key, bound] of [
    ["min", min],
    ["max", max],
  ] as const) {
    if (bound === null) continue;
    if (!Number.isFinite(bound)) {
      error(breed, `${path}.${key}`, "Must be a finite number");
    } else if (bounds && (bound < bounds.min || bound > bounds.max)) {
      error(breed, `${path}.${key}`, `${bound} is outside ${bounds.min}–${bounds.max}`);
    }
  }
  if (min !== null && max !== null && min > max) {
    error(breed, path, `min ${min} is greater than max ${max}`);
  }
}

function bySex<Unit extends string>(
  value: Breed["physical"]["height"] | Breed["physical"]["weight"],
  allowed: readonly Unit[],
  limits: Record<Unit, { min: number; max: number }>,
  breed: string,
  path: string,
  error: Report,
): void {
  const rangesAbsent = isAbsent(value.male) && isAbsent(value.female);
  if (rangesAbsent) {
    if (value.unit !== null) {
      error(breed, `${path}.unit`, "Unit must be null when no measurement is recorded");
    }
    return;
  }
  if (value.unit === null) {
    error(breed, `${path}.unit`, "Unit is required when a measurement is recorded");
    range(value.male, null, breed, `${path}.male`, error);
    range(value.female, null, breed, `${path}.female`, error);
    return;
  }
  if (!(allowed as readonly string[]).includes(value.unit)) {
    error(
      breed,
      `${path}.unit`,
      `Unknown unit ${JSON.stringify(value.unit)}. Use ${allowed.join(", ")}`,
    );
    range(value.male, null, breed, `${path}.male`, error);
    range(value.female, null, breed, `${path}.female`, error);
    return;
  }
  const bounds = limits[value.unit as Unit];
  range(value.male, bounds, breed, `${path}.male`, error);
  range(value.female, bounds, breed, `${path}.female`, error);
}

export function isoToday(): string {
  return new Date().toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Reliability report
// ---------------------------------------------------------------------------

export interface ReliabilityReport {
  perReliability: Record<Reliability, number>;
  perBreed: Array<{ slug: string; verifiedLeaves: number; totalLeaves: number }>;
}

/** Effective reliability of every leaf fact, across the catalog. */
export function reliabilityReport(breeds: readonly Breed[]): ReliabilityReport {
  const perReliability = Object.fromEntries(
    RELIABILITIES.map((key) => [key, 0]),
  ) as Record<Reliability, number>;
  const perBreed: ReliabilityReport["perBreed"] = [];
  for (const breed of breeds) {
    let verified = 0;
    for (const leaf of LEAF_FACT_PATHS) {
      const resolved = resolveEvidence(breed.evidence, leaf);
      if (!resolved) continue;
      perReliability[resolved.claim.reliability] += 1;
      if ((VERIFIED_RELIABILITIES as readonly Reliability[]).includes(resolved.claim.reliability)) {
        verified += 1;
      }
    }
    perBreed.push({
      slug: breed.slug,
      verifiedLeaves: verified,
      totalLeaves: LEAF_FACT_PATHS.length,
    });
  }
  return { perReliability, perBreed };
}
