/**
 * Maps a The Dog API breed into our breed schema.
 * Text stays in the API's words. Empty fields stay null.
 * Photographs are never copied into this file.
 */

import type {
  Breed,
  BySex,
  Evidence,
  EvidenceMap,
  FactPath,
  HeightUnit,
  IsoDate,
  NumericRange,
  WeightUnit,
} from "../schema/breed.types";
import { isAbsent, LEAF_FACT_PATHS, valueAt } from "../validate/rules";
import type { DogApiBreed, DogApiFact, DogApiHealthTip } from "./api";

export interface TheDogIdentity {
  slug: string;
  name: string;
  exportName: string;
  country: string | null;
  group: string | null;
}

export interface TheDogExtras {
  colours: string[];
  facts: string[];
  healthTips: string[];
}

const SHARED_RANGE_NOTE =
  "The Dog API gave one range for the breed and did not separate males and females.";

const COLOUR_NOTE =
  "The colour endpoint lists variants registered for this breed, including variants applied across the species. Keep only the colours that belong to this breed.";

const LOCATOR: Partial<Record<FactPath, string>> = {
  alternateNames: "breed.alt_names",
  group: "breed.breed_group",
  "origin.country": "breed.origin",
  "overview.description": "breed.description",
  "overview.history": "breed.history",
  "overview.originalPurpose": "breed.bred_for",
  "overview.currentRoles": "breed.perfect_for",
  "physical.height": "breed.height.metric",
  "physical.lifespanYears": "breed.life_span",
  "physical.coatColors": "GET /breeds/{id}/colours",
  "physical.weight.male.max": "breed.weight.metric",
  "physical.weight.female.max": "breed.weight.metric",
  "temperament.traits": "breed.temperament",
  "health.preventiveCare": "GET /health-tips/breed/{id}",
  funFacts: "GET /facts/breed/{id}",
};

/** The import used while the file sits in `src/thedog/current`. */
export const CURRENT_IMPORT = "../../schema/breed.types";
/** The import used after the file moves to `src/thedog`. */
export const STORED_IMPORT = "../schema/breed.types";

export function buildTheDogBreed(
  identity: TheDogIdentity,
  api: DogApiBreed,
  extras: TheDogExtras,
  today: string,
): Breed {
  const height = measurement(api.height?.metric, "cm");
  const weight = measurement(api.weight?.metric, "kg");
  const alternates = splitList(api.alt_names);
  if (!sameLoose(api.name, identity.name)) alternates.unshift(api.name);

  const breed: Breed = {
    slug: identity.slug,
    name: identity.name,
    scientificName: null,
    alternateNames: unique(alternates),
    group: cleanText(api.breed_group),
    origin: {
      country: cleanText(api.origin),
      region: null,
    },
    images: [],
    overview: {
      summary: null,
      description: cleanText(api.description),
      history: cleanText(api.history),
      originalPurpose: cleanText(api.bred_for),
      currentRoles: splitList(api.perfect_for),
    },
    physical: {
      sizeCategory: null,
      height: height.value,
      weight: weight.value,
      lifespanYears: parseBound(api.life_span ?? ""),
      coatType: null,
      coatLength: null,
      coatColors: unique(extras.colours.map((colour) => colour.trim()).filter((colour) => cleanText(colour))),
      sheddingLevel: null,
      droolingLevel: null,
      distinctiveFeatures: [],
    },
    temperament: {
      traits: splitList(api.temperament),
      scores: {
        affection: null,
        withChildren: null,
        withDogs: null,
        withStrangers: null,
        protectiveness: null,
        independence: null,
        trainability: null,
        barking: null,
        energy: null,
      },
    },
    care: {
      exercise: { level: null, minutesPerDay: null, activities: [] },
      grooming: { level: null, brushing: null, bathing: null, notes: [] },
      training: { difficulty: null, tips: [], socialization: null },
      livingEnvironment: {
        apartmentSuitable: null,
        houseWithYardSuitable: null,
        climates: [],
        aloneTimeTolerance: null,
      },
    },
    nutrition: {
      dietType: null,
      feedingFrequency: { puppy: null, adult: null, senior: null },
      guidelines: null,
      considerations: [],
      note: null,
    },
    health: {
      overview: null,
      commonConditions: [],
      preventiveCare: unique(extras.healthTips),
      recommendedScreenings: [],
      dentalCare: null,
      earCare: null,
      skinCare: null,
    },
    suitability: {
      firstTimeOwners: null,
      familiesWithChildren: null,
      seniorOwners: null,
      activeOwners: null,
      apartmentLiving: null,
      idealFor: [],
      notIdealFor: [],
    },
    funFacts: unique(extras.facts),
    faq: [],
    references: [],
    evidence: {},
    updatedOn: today as IsoDate,
  };

  const notes: Partial<Record<FactPath, string>> = {};
  if (height.shared) notes["physical.height"] = SHARED_RANGE_NOTE;
  if (weight.shared) {
    notes["physical.weight.male.max"] = SHARED_RANGE_NOTE;
    notes["physical.weight.female.max"] = SHARED_RANGE_NOTE;
  }
  if (breed.physical.coatColors.length > 0) notes["physical.coatColors"] = COLOUR_NOTE;
  assignEvidence(breed, notes);
  return breed;
}

export function renderBreedFile(breed: Breed, exportName: string): string {
  return `import type { Breed } from "${CURRENT_IMPORT}";\n\nexport const ${exportName}: Breed = ${printValue(breed, 0)};\n`;
}

export function healthTipLine(tip: DogApiHealthTip): string | null {
  const title = cleanText(tip.title);
  const description = cleanText(tip.description);
  if (title && description) return `${title}: ${description}`;
  return title ?? description;
}

export function factLine(fact: DogApiFact): string | null {
  return cleanText(fact.fact) ?? cleanText(fact.title);
}

function assignEvidence(breed: Breed, notes: Partial<Record<FactPath, string>>): void {
  const evidence: EvidenceMap = {};
  let cited = false;
  for (const leaf of LEAF_FACT_PATHS) {
    evidence[leaf] = isAbsent(valueAt(breed, leaf))
      ? unavailable()
      : verified(leaf, breed.updatedOn, notes[leaf] ?? null);
    if (evidence[leaf]?.reliability === "reliable_source") cited = true;
  }
  breed.evidence = evidence;
  breed.references = cited ? ["the-dog-api"] : [];
}

function verified(leaf: FactPath, today: string, note: string | null): Evidence {
  return {
    reliability: "reliable_source",
    sources: [{ id: "the-dog-api", role: "verified", locator: LOCATOR[leaf] ?? "The Dog API breed record" }],
    verifiedOn: today as IsoDate,
    note,
  };
}

function unavailable(): Evidence {
  return {
    reliability: "unavailable",
    sources: [],
    verifiedOn: null,
    note: "The Dog API response did not include this.",
  };
}

function measurement<Unit extends HeightUnit | WeightUnit>(
  metric: string | null | undefined,
  unit: Unit,
): { value: BySex<Unit>; shared: boolean } {
  const parsed = parseSexMetric(metric);
  const absent = parsed.male === null && parsed.female === null;
  return {
    value: {
      unit: absent ? null : unit,
      male: parsed.male,
      female: parsed.female,
    },
    shared: parsed.shared,
  };
}

function parseSexMetric(metric: string | null | undefined): {
  male: NumericRange | null;
  female: NumericRange | null;
  shared: boolean;
} {
  const text = cleanText(metric);
  if (!text) return { male: null, female: null, shared: false };
  const sex = /^Male:\s*([^;]+);\s*Female:\s*(.+)$/i.exec(text);
  if (sex) {
    return {
      male: parseBound(sex[1] ?? ""),
      female: parseBound(sex[2] ?? ""),
      shared: false,
    };
  }
  const range = parseBound(text);
  return { male: range, female: range, shared: range !== null };
}

function parseBound(text: string): NumericRange | null {
  const trimmed = cleanText(text);
  if (!trimmed) return null;
  const upTo = /^up to\s+([0-9]+(?:\.[0-9]+)?)$/i.exec(trimmed);
  if (upTo?.[1]) return { min: null, max: Number(upTo[1]) };
  const pair = /^([0-9]+(?:\.[0-9]+)?)\s*-\s*([0-9]+(?:\.[0-9]+)?)$/.exec(trimmed);
  if (pair?.[1] && pair[2]) return { min: Number(pair[1]), max: Number(pair[2]) };
  const single = /^([0-9]+(?:\.[0-9]+)?)$/.exec(trimmed);
  if (single?.[1]) {
    const value = Number(single[1]);
    return { min: value, max: value };
  }
  return null;
}

function splitList(value: string | null | undefined): string[] {
  const text = cleanText(value);
  if (!text) return [];
  return unique(
    text
      .split(",")
      .map((part) => part.trim())
      .filter((part) => cleanText(part) !== null),
  );
}

function unique(values: readonly string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

function cleanText(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed || /^(?:n\/?a|none|null|unknown|unspecified|tbd|tba|todo|-+|\?+|\.+)$/i.test(trimmed)) {
    return null;
  }
  return trimmed;
}

function sameLoose(left: string, right: string): boolean {
  const fold = (value: string) =>
    value
      .normalize("NFKD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/ +/g, " ");
  return fold(left) === fold(right);
}

function printValue(value: unknown, indent: number): string {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const pad = " ".repeat(indent + 2);
    const inner = value.map((item) => `${pad}${printValue(item, indent + 2)}`).join(",\n");
    return `[\n${inner},\n${" ".repeat(indent)}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    const pad = " ".repeat(indent + 2);
    const inner = entries
      .map(([key, item]) => `${pad}${printKey(key)}: ${printValue(item, indent + 2)}`)
      .join(",\n");
    return `{\n${inner},\n${" ".repeat(indent)}}`;
  }
  return "null";
}

function printKey(key: string): string {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(key) ? key : JSON.stringify(key);
}
