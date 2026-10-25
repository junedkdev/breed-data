import assert from "node:assert/strict";
import { test } from "node:test";

import type { DogApiBreed } from "./api";
import { matchBreeds } from "./match";

function breed(input: Partial<DogApiBreed> & Pick<DogApiBreed, "id" | "name">): DogApiBreed {
  return input;
}

const collies = [
  breed({
    id: "88",
    name: "Rough Collie",
    origin: "Scotland",
    country_code: "GB",
    breed_group: "Herding",
    alt_names: "Collie, Long-haired Collie",
    image: { url: "https://cdn2.thedogapi.com/images/rough.jpg" },
  }),
  breed({
    id: "284",
    name: "Smooth Collie",
    origin: "Scotland and Northern England",
    country_code: "GB",
    breed_group: "Herding",
    alt_names: "Smooth-haired Collie",
    image: { url: "https://cdn2.thedogapi.com/images/smooth.jpg" },
  }),
];

test("an exact name matches one breed, including a reordered name", () => {
  const result = matchBreeds(collies, {
    names: ["Collie, Rough"],
    country: "Scotland",
    group: "Herding",
  });
  assert.equal(result.status, "one");
  if (result.status === "one") assert.equal(result.breed.id, "88");
});

test("an alternate name matches when the display name differs", () => {
  const result = matchBreeds(
    [
      breed({
        id: "125",
        name: "Pyrenean Mountain Dog",
        origin: "France",
        breed_group: "Working",
        alt_names: "Great Pyrenees, Chien de Montagne des Pyrénées",
      }),
    ],
    { names: ["Great Pyrenees"], country: "France", group: "Working" },
  );
  assert.equal(result.status, "one");
  if (result.status === "one") assert.equal(result.breed.id, "125");
});

test("accents do not block an exact name", () => {
  const result = matchBreeds(
    [breed({ id: "159", name: "Löwchen", origin: "France", breed_group: "Non-Sporting" })],
    { names: ["Lowchen"], country: "France", group: null },
  );
  assert.equal(result.status, "one");
});

test("two close names stay unresolved until a person chooses", () => {
  const result = matchBreeds(collies, {
    names: ["Haired Collie"],
    country: "Great Britain",
    group: "Herding Group",
  });
  assert.equal(result.status, "many");
  if (result.status === "many") {
    assert.deepEqual(
      result.candidates.map((candidate) => candidate.id),
      ["88", "284"],
    );
    assert.equal(result.candidates[0]?.imageUrl, "https://cdn2.thedogapi.com/images/rough.jpg");
  }
});

test("country identifies one breed when the names are only related", () => {
  const result = matchBreeds(
    [
      breed({ id: "164", name: "English Working Mastiff", origin: "England", country_code: "GB", breed_group: "Working" }),
      breed({ id: "613", name: "Spanish Working Mastiff", origin: "Spain", country_code: "ES", breed_group: "Working" }),
    ],
    { names: ["Working Mastiff"], country: "Spain", group: "Working" },
  );
  assert.equal(result.status, "one");
  if (result.status === "one") assert.equal(result.breed.id, "613");
});

test("an unrelated name matches nothing", () => {
  const result = matchBreeds(collies, {
    names: ["Zerzura Hound"],
    country: "Egypt",
    group: "Hound",
  });
  assert.equal(result.status, "none");
});
