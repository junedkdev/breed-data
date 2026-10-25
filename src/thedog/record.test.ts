import assert from "node:assert/strict";
import { test } from "node:test";

import { licenses } from "../registry/licenses";
import { sources } from "../registry/sources";
import { isoToday, validateCatalog } from "../validate/rules";
import type { DogApiBreed } from "./api";
import { buildTheDogBreed, factLine, healthTipLine, renderBreedFile } from "./record";

const today = isoToday();

const affenpinscher: DogApiBreed = {
  id: "1",
  name: "Affenpinscher",
  life_span: "12-15",
  temperament: "Confident, alert, playful",
  origin: "Germany",
  description: "Small, sturdy toy breed with a distinctive monkey-like expression.",
  bred_for: null,
  perfect_for: null,
  breed_group: "Toy",
  history: "Originating in 17th-century Germany.",
  alt_names: "Monkey Terrier, Monkey Dog",
  weight: { metric: "3.2-4.5" },
  height: { metric: "23-29" },
  image: { url: "https://cdn2.thedogapi.com/images/0LJiOVlxp.jpg" },
};

test("API facts fill the schema and missing facts stay empty", () => {
  const breed = buildTheDogBreed(
    { slug: "affenpinscher", name: "Affenpinscher", exportName: "affenpinscher", country: "Germany", group: "Toy" },
    affenpinscher,
    {
      colours: ["Black", "Black and Tan"],
      facts: ["The Affenpinscher's name means monkey terrier."],
      healthTips: ["Dental care: Brush the teeth often."],
    },
    today,
  );

  assert.deepEqual(breed.images, []);
  assert.equal(breed.overview.description, affenpinscher.description);
  assert.equal(breed.overview.summary, null);
  assert.deepEqual(breed.alternateNames, ["Monkey Terrier", "Monkey Dog"]);
  assert.equal(breed.physical.height.unit, "cm");
  assert.deepEqual(breed.physical.height.male, { min: 23, max: 29 });
  assert.deepEqual(breed.physical.height.female, { min: 23, max: 29 });
  assert.equal(breed.physical.weight.unit, "kg");
  assert.deepEqual(breed.physical.weight.male, { min: 3.2, max: 4.5 });
  assert.equal(breed.physical.lifespanYears?.min, 12);
  assert.deepEqual(breed.temperament.traits, ["Confident", "alert", "playful"]);
  assert.deepEqual(breed.funFacts, ["The Affenpinscher's name means monkey terrier."]);
  assert.deepEqual(breed.health.preventiveCare, ["Dental care: Brush the teeth often."]);
  assert.deepEqual(breed.references, ["the-dog-api"]);
  assert.equal(breed.evidence["physical.height"]?.reliability, "reliable_source");
  assert.match(breed.evidence["physical.height"]?.note ?? "", /did not separate males and females/);
  assert.equal(breed.evidence["overview.summary"]?.reliability, "unavailable");
  assert.equal(breed.evidence.scientificName?.reliability, "unavailable");

  const result = validateCatalog({ breeds: [breed], sources, licenses }, today);
  const unexpected = result.errors.filter((issue) => issue.path !== "images");
  assert.deepEqual(unexpected, []);
  assert.ok(result.errors.some((issue) => issue.path === "images"));
});

test("a sex-specific range is not copied onto both sexes", () => {
  const breed = buildTheDogBreed(
    { slug: "afghan-hound", name: "Afghan Hound", exportName: "afghan_hound", country: null, group: null },
    {
      id: "2",
      name: "Afghan Hound",
      weight: { metric: "Male: 25-30; Female: 20-25" },
      height: { metric: "unknown" },
    },
    { colours: [], facts: [], healthTips: [] },
    today,
  );
  assert.deepEqual(breed.physical.weight.male, { min: 25, max: 30 });
  assert.deepEqual(breed.physical.weight.female, { min: 20, max: 25 });
  assert.equal(breed.physical.weight.unit, "kg");
  assert.equal(breed.evidence["physical.weight.male.max"]?.note, null);
  assert.equal(breed.physical.height.unit, null);
  assert.equal(breed.physical.height.male, null);
});

test("the rendered file imports the schema from the current folder", () => {
  const breed = buildTheDogBreed(
    { slug: "affenpinscher", name: "Affenpinscher", exportName: "affenpinscher", country: null, group: null },
    affenpinscher,
    { colours: [], facts: [], healthTips: [] },
    today,
  );
  const text = renderBreedFile(breed, "affenpinscher");
  assert.match(text, /import type \{ Breed \} from "\.\.\/\.\.\/schema\/breed\.types"/);
  assert.match(text, /export const affenpinscher: Breed =/);
  assert.equal(text.endsWith("\n"), true);
});

test("fact and health lines keep the API wording", () => {
  assert.equal(factLine({ title: "Title", fact: "A full fact." }), "A full fact.");
  assert.equal(healthTipLine({ title: "Teeth", description: "Brush often." }), "Teeth: Brush often.");
  assert.equal(factLine({ fact: "unknown" }), null);
});
