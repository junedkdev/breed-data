/**
 * Validator behaviour on a known-good record and on deliberately broken
 * copies of it. Run with `npm test`.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

import {
  SCHEMA_VERSION,
  type Breed,
  type BreedCatalogDocument,
} from "../breeds/breed.types";
import { breedData } from "../breeds/data";
import { licenses } from "../breeds/licenses";
import { sources } from "../breeds/sources";
import { LEAF_FACT_PATHS, isAbsent, validateCatalog } from "./validate";

const TODAY = new Date().toISOString().split("T")[0];

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function verified(): Breed {
  const breed = breedData.find((b) => b.slug === "russian-toy");
  assert.ok(breed, "russian-toy is the reference record with verified claims");
  return clone(breed);
}

function unverified(): Breed {
  const breed = breedData.find((b) => b.slug === "eurasier");
  assert.ok(breed);
  return clone(breed);
}

function errorsFor(breed: Breed): string[] {
  return validateCatalog({ breeds: [breed], sources, licenses }, TODAY).errors.map(
    (issue) => `${issue.path}: ${issue.message}`,
  );
}

test("the committed catalog has no errors", () => {
  const result = validateCatalog({ breeds: breedData, sources, licenses }, TODAY);
  assert.deepEqual(result.errors, []);
});

test("data.json matches the TypeScript catalog", () => {
  const jsonPath = resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../data.json",
  );
  const document = JSON.parse(readFileSync(jsonPath, "utf8")) as BreedCatalogDocument;
  assert.equal(document.schemaVersion, SCHEMA_VERSION);
  assert.equal(document.breeds.length, breedData.length);
  assert.deepEqual(
    document.breeds.map((breed) => breed.slug).sort(),
    [...breedData].map((breed) => breed.slug).sort(),
  );
  const result = validateCatalog(
    {
      breeds: document.breeds,
      sources: document.sources,
      licenses: document.licenses,
    },
    TODAY,
  );
  assert.deepEqual(result.errors, []);
});

test("every leaf fact path resolves to a claim in every breed", () => {
  for (const breed of breedData) {
    const result = validateCatalog({ breeds: [breed], sources, licenses }, TODAY);
    assert.deepEqual(result.errors, [], breed.slug);
  }
  assert.ok(LEAF_FACT_PATHS.length > 50);
});

test("a verified reliability needs a verified source", () => {
  const breed = verified();
  breed.evidence["origin.country"]!.sources = [];
  const errors = errorsFor(breed);
  assert.ok(errors.some((e) => e.includes('needs at least one source with role "verified"')), errors.join("\n"));
});

test("a verified reliability needs a verifiedOn date", () => {
  const breed = verified();
  breed.evidence["origin.country"]!.verifiedOn = null;
  assert.ok(errorsFor(breed).some((e) => e.includes("needs a verifiedOn date")));
});

test("official_standard needs a verified official breed standard", () => {
  const breed = verified();
  const claim = breed.evidence["physical.lifespanYears"]!;
  // AKC page verifies lifespan; claiming official_standard from it is wrong.
  claim.reliability = "official_standard";
  assert.ok(
    errorsFor(breed).some((e) => e.includes("source of type official_breed_standard")),
  );
});

test("an unverified claim cannot carry a verified source or a date", () => {
  const breed = verified();
  const claim = breed.evidence["origin.country"]!;
  claim.reliability = "unverified";
  const errors = errorsFor(breed);
  assert.ok(errors.some((e) => e.includes('cannot have a source with role "verified"')));
  assert.ok(errors.some((e) => e.includes("cannot carry a verifiedOn date")));
});

test("verification dates cannot be in the future", () => {
  const breed = verified();
  breed.evidence["origin.country"]!.verifiedOn = "2030-01-01";
  assert.ok(errorsFor(breed).some((e) => e.includes("is in the future")));
});

test("a null value must be claimed unavailable", () => {
  const breed = unverified();
  breed.physical.coatType = null;
  // Inherits "unverified" from `physical`, which is dishonest for a null.
  assert.ok(errorsFor(breed).some((e) => e.startsWith("physical.coatType:") && e.includes('Add an "unavailable" claim')));
});

test("an unavailable claim cannot sit on a recorded value", () => {
  const breed = unverified();
  breed.evidence["physical.coatType"] = {
    reliability: "unavailable",
    sources: [],
    verifiedOn: null,
    note: null,
  };
  assert.ok(errorsFor(breed).some((e) => e.includes("Claimed unavailable, but a value is recorded")));
});

test("placeholder strings are rejected", () => {
  const breed = unverified();
  breed.physical.droolingLevel = "N/A";
  assert.ok(errorsFor(breed).some((e) => e.includes("Placeholder text")));
});

test("zero is not a measurement", () => {
  const breed = unverified();
  breed.physical.weightKg.male = { min: 0, max: 30 };
  assert.ok(errorsFor(breed).some((e) => e.includes("outside")));
});

test("evidence sources must be listed in references", () => {
  const breed = verified();
  breed.references = breed.references.filter((id) => !id.startsWith("fci-"));
  assert.ok(errorsFor(breed).some((e) => e.includes("missing from references")));
});

test("an image whose license requires attribution must have a credit line", () => {
  const breed = unverified();
  const image = breed.images.find((i) => i.licenseId === "cc-by-sa-3.0");
  assert.ok(image);
  image.attribution = null;
  assert.ok(errorsFor(breed).some((e) => e.includes("requires attribution")));
});

test("commercial-use terms cannot be claimed without a known license", () => {
  // The schema has no per-image permission flags; permissions come from the
  // license registry only. A null licenseId therefore yields no permissions.
  const breed = unverified();
  breed.images[0]!.licenseId = null;
  const result = validateCatalog({ breeds: [breed], sources, licenses }, TODAY);
  assert.deepEqual(result.errors, []);
  assert.ok(result.warnings.some((w) => w.message.includes("No license recorded")));
});

test("isAbsent treats empty lists and all-null objects as absent", () => {
  assert.equal(isAbsent(null), true);
  assert.equal(isAbsent([]), true);
  assert.equal(isAbsent({ min: null, max: null }), true);
  assert.equal(isAbsent({ min: null, max: 3 }), false);
  assert.equal(isAbsent("text"), false);
  assert.equal(isAbsent(false), false);
});
