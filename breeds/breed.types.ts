/**
 * Breed catalog schema (version 3).
 *
 * Author breed records in this folder and list them from `data.ts`.
 * `npm run build` checks those records and writes `data.json`.
 * Copy `data.json` into the Flutter app at `dog/assets/breed/data.json`.
 * The app does not read these TypeScript files.
 *
 * `licenses.ts` and `sources.ts` are shared registries. The build copies
 * them into `data.json`.
 *
 * Design rules
 * ------------
 * - Facts are plain values. Provenance lives beside them in `evidence`, keyed
 *   by a fact path. A claim on a section (`care.exercise`) applies to every
 *   leaf under it unless a more specific claim exists. This keeps the data
 *   readable and lets a single field be re-verified without touching the rest.
 * - `null` means "no value is recorded". Never use `0`, `""`, `"N/A"`, or
 *   `"Unknown"` as a placeholder. An empty list means the same for lists.
 * - A leaf with no value must resolve to an `unavailable` claim, and an
 *   `unavailable` claim may only cover leaves that have no value.
 * - `official_standard` and `reliable_source` are the only reliabilities that
 *   mean "someone checked this against a source". They require at least one
 *   source with role `verified` and a `verifiedOn` date. Listing a source in
 *   `references` is a bibliography entry, not a verification.
 * - Sources and licenses are registries shared by every breed. Records refer
 *   to them by id so a URL or license term is stored once.
 * - Image license terms (commercial use, attribution, share-alike) are a
 *   property of the license, not of the photo. A photo whose license is not
 *   known has `licenseId: null`; the UI must then make no permission claims.
 */

import type { LicenseId } from "./licenses";
import type { SourceId } from "./sources";

export const SCHEMA_VERSION = 3;

/** Calendar date, `YYYY-MM-DD`. */
export type IsoDate = `${number}-${number}-${number}`;

// ---------------------------------------------------------------------------
// Provenance
// ---------------------------------------------------------------------------

/**
 * How much weight a fact can carry.
 *
 * - `official_standard`  Checked against an official breed standard
 *                        (FCI, AKC, KC, UKC, CKC, national club standard).
 * - `reliable_source`    Checked against a kennel club, breed club,
 *                        veterinary, or scientific source.
 * - `estimate`           Editorial judgement, such as a 1–5 score. It can be
 *                        informed by sources but cannot be verified against one.
 * - `general_guidance`   Care advice that applies to most dogs and is not a
 *                        breed-specific fact.
 * - `unverified`         Recorded, but not checked against any source.
 * - `unavailable`        No value was found. The value is `null` / empty.
 */
export type Reliability =
  | "official_standard"
  | "reliable_source"
  | "estimate"
  | "general_guidance"
  | "unverified"
  | "unavailable";

export const RELIABILITIES = [
  "official_standard",
  "reliable_source",
  "estimate",
  "general_guidance",
  "unverified",
  "unavailable",
] as const satisfies readonly Reliability[];

/** Reliabilities that assert a human compared the value with a source. */
export const VERIFIED_RELIABILITIES = [
  "official_standard",
  "reliable_source",
] as const satisfies readonly Reliability[];

export type SourceType =
  | "official_breed_standard"
  | "kennel_club"
  | "breed_club"
  | "veterinary"
  | "scientific"
  | "encyclopedia"
  | "veterinary_reference"
  | "official_standard"
  | "scientific_publication"
  | "breed_standard"
  | "breed_registry"
  | "other";

export const SOURCE_TYPES = [
  "official_breed_standard",
  "kennel_club",
  "breed_club",
  "veterinary",
  "scientific",
  "encyclopedia",
  "veterinary_reference",
  "official_standard",
  "scientific_publication",
  "breed_standard",
  "breed_registry",
  "other",
] as const satisfies readonly SourceType[];

/** A publication. Reusable across breeds; see `breeds/sources.ts`. */
export interface Source {
  id: string;
  name: string;
  publisher: string | null;
  url: string;
  type: SourceType;
  commercialUse?: "reference_only" | "commercial_use" | null;
  /** Publication or revision date printed on the source, if it has one. */
  publishedOn: IsoDate | null;
  /** When the URL was last opened by an editor. Not a fact-check date. */
  accessedOn: IsoDate | null;
  note: string | null;
}

/**
 * - `verified`     The value was compared with this source and matches.
 * - `cited`        The source informed the value but was not used to verify it.
 * - `conflicting`  The source gives a different value. Keep it visible.
 */
export type EvidenceRole = "verified" | "cited" | "conflicting";

export const EVIDENCE_ROLES = [
  "verified",
  "cited",
  "conflicting",
] as const satisfies readonly EvidenceRole[];

export interface EvidenceSource {
  id: SourceId;
  role: EvidenceRole;
  /** Where in the source, e.g. "Section: Size and weight" or "p. 3". */
  locator: string | null;
}

export interface Evidence {
  reliability: Reliability;
  sources: EvidenceSource[];
  /** Date the value was checked. Only for `official_standard` / `reliable_source`. */
  verifiedOn: IsoDate | null;
  note: string | null;
}

/**
 * Every path that can carry a claim. A path with children is a section;
 * a claim on it covers each child unless the child has its own claim.
 * The validator requires every leaf to resolve to a claim.
 */
export const FACT_PATHS = [
  "alternateNames",
  "scientificName",
  "group",
  "origin",
  "origin.country",
  "origin.region",
  "overview",
  "overview.summary",
  "overview.description",
  "overview.history",
  "overview.originalPurpose",
  "overview.currentRoles",
  "physical",
  "physical.sizeCategory",
  "physical.heightCm",
  "physical.weightKg",
  "physical.lifespanYears",
  "physical.coatType",
  "physical.coatLength",
  "physical.coatColors",
  "physical.sheddingLevel",
  "physical.droolingLevel",
  "physical.distinctiveFeatures",
  "temperament",
  "temperament.traits",
  "temperament.scores",
  "temperament.scores.affection",
  "temperament.scores.withChildren",
  "temperament.scores.withDogs",
  "temperament.scores.withStrangers",
  "temperament.scores.protectiveness",
  "temperament.scores.independence",
  "temperament.scores.trainability",
  "temperament.scores.barking",
  "temperament.scores.energy",
  "care",
  "care.exercise",
  "care.exercise.level",
  "care.exercise.minutesPerDay",
  "care.exercise.activities",
  "care.grooming",
  "care.grooming.level",
  "care.grooming.brushing",
  "care.grooming.bathing",
  "care.grooming.notes",
  "care.training",
  "care.training.difficulty",
  "care.training.tips",
  "care.training.socialization",
  "care.livingEnvironment",
  "care.livingEnvironment.apartmentSuitable",
  "care.livingEnvironment.houseWithYardSuitable",
  "care.livingEnvironment.climates",
  "care.livingEnvironment.aloneTimeTolerance",
  "nutrition",
  "nutrition.dietType",
  "nutrition.feedingFrequency",
  "nutrition.feedingFrequency.puppy",
  "nutrition.feedingFrequency.adult",
  "nutrition.feedingFrequency.senior",
  "nutrition.guidelines",
  "nutrition.considerations",
  "nutrition.note",
  "health",
  "health.overview",
  "health.commonConditions",
  "health.preventiveCare",
  "health.recommendedScreenings",
  "health.dentalCare",
  "health.earCare",
  "health.skinCare",
  "suitability",
  "suitability.firstTimeOwners",
  "suitability.familiesWithChildren",
  "suitability.seniorOwners",
  "suitability.activeOwners",
  "suitability.apartmentLiving",
  "suitability.idealFor",
  "suitability.notIdealFor",
  "funFacts",
  "faq",
  "physical.weightKg.male.max",
  "physical.weightKg.female.max"
] as const;

export type FactPath = (typeof FACT_PATHS)[number];

export type EvidenceMap = Partial<Record<FactPath, Evidence>>;

// ---------------------------------------------------------------------------
// Images and licenses
// ---------------------------------------------------------------------------

/** A license deed. Reusable across images; see `breeds/licenses.ts`. */
export interface License {
  name: string;
  /** SPDX identifier when one exists, e.g. "CC-BY-SA-4.0". */
  spdx: string | null;
  url: string | null;
  /** Terms as stated by the deed. `null` only when the deed was not read. */
  commercialUseAllowed: boolean | null;
  attributionRequired: boolean | null;
  shareAlikeRequired: boolean | null;
}

/**
 * One photograph. Fields mirror what a file page or media API actually
 * provides. Leave a field `null` rather than guessing it.
 */
export interface BreedImage {
  /** Direct file URL. */
  url: string;
  /** The page that describes the file (e.g. a Wikimedia Commons File: page). */
  sourcePage: string | null;
  /** File title on the source page. */
  title: string | null;
  /** Caption or description from the source page, as plain text. */
  description: string | null;
  /** Photographer or artist, as plain text. */
  creator: string | null;
  /** Account that uploaded the file, when different from the creator. */
  uploader: string | null;
  /** When the photo was taken (`DateTimeOriginal`), if stated. */
  capturedOn: IsoDate | null;
  /** When the file was uploaded to the source, if stated. */
  uploadedOn: IsoDate | null;
  /** Pixel size of the original file. Both or neither. */
  width: number | null;
  height: number | null;
  licenseId: LicenseId | null;
  /** Ready-to-display credit line. Required when the license requires attribution. */
  attribution: string | null;
  /** Non-copyright restrictions noted by the source, e.g. "trademarked". */
  restrictions: string | null;
  /** When the source page's license and metadata were last read. */
  metadataCheckedOn: IsoDate | null;
}

// ---------------------------------------------------------------------------
// Facts
// ---------------------------------------------------------------------------

/** At least one bound is set. `min <= max` when both are set. */
export interface NumericRange {
  min: number | null;
  max: number | null;
}

export interface BySex {
  male: NumericRange | null;
  female: NumericRange | null;
}

/** Integer 1–5, or `null` when no score is recorded. */
export type Score = 1 | 2 | 3 | 4 | 5 | null;

export interface TemperamentScores {
  affection: Score;
  withChildren: Score;
  withDogs: Score;
  withStrangers: Score;
  protectiveness: Score;
  independence: Score;
  trainability: Score;
  barking: Score;
  energy: Score;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Breed {
  /** Kebab-case, unique. The ML label is the same string with underscores. */
  slug: string;
  name: string;
  scientificName: string | null;
  alternateNames: string[];
  /** Registry group as display text. Registries disagree, so this is not an enum. */
  group: string | null;
  origin: {
    country: string | null;
    region: string | null;
  };
  /** Ordered. The first image is the thumbnail and hero. URLs are unique. */
  images: BreedImage[];
  overview: {
    summary: string | null;
    description: string | null;
    history: string | null;
    originalPurpose: string | null;
    currentRoles: string[];
  };
  physical: {
    sizeCategory: string | null;
    heightCm: BySex;
    weightKg: BySex;
    lifespanYears: NumericRange | null;
    coatType: string | null;
    coatLength: string | null;
    coatColors: string[];
    sheddingLevel: string | null;
    droolingLevel: string | null;
    distinctiveFeatures: string[];
  };
  temperament: {
    traits: string[];
    scores: TemperamentScores;
  };
  care: {
    exercise: {
      level: string | null;
      minutesPerDay: NumericRange | null;
      activities: string[];
    };
    grooming: {
      level: string | null;
      brushing: string | null;
      bathing: string | null;
      notes: string[];
    };
    training: {
      difficulty: string | null;
      tips: string[];
      socialization: string | null;
    };
    livingEnvironment: {
      apartmentSuitable: boolean | null;
      houseWithYardSuitable: boolean | null;
      climates: string[];
      aloneTimeTolerance: string | null;
    };
  };
  nutrition: {
    dietType: string | null;
    feedingFrequency: {
      puppy: string | null;
      adult: string | null;
      senior: string | null;
    };
    guidelines: string | null;
    considerations: string[];
    note: string | null;
  };
  health: {
    overview: string | null;
    commonConditions: string[];
    preventiveCare: string[];
    recommendedScreenings: string[];
    dentalCare: string | null;
    earCare: string | null;
    skinCare: string | null;
  };
  suitability: {
    firstTimeOwners: boolean | null;
    familiesWithChildren: boolean | null;
    seniorOwners: boolean | null;
    activeOwners: boolean | null;
    apartmentLiving: boolean | null;
    idealFor: string[];
    notIdealFor: string[];
  };
  funFacts: string[];
  faq: Faq[];
  /**
   * Bibliography shown to users, in display order. Must include every source
   * used in `evidence`. May include sources consulted but not tied to a fact.
   */
  references: SourceId[];
  evidence: EvidenceMap;
  /** Date the record content was last changed. */
  updatedOn: IsoDate;
}

// ---------------------------------------------------------------------------
// Document written to data.json
// ---------------------------------------------------------------------------

export interface BreedCatalogDocument {
  schemaVersion: typeof SCHEMA_VERSION;
  sources: Record<string, Source>;
  licenses: Record<string, License>;
  breeds: Breed[];
}
