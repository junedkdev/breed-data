/**
 * Picks the The Dog API breed that corresponds to a breed file we already have.
 * An exact name wins. Other fields are used only to tell close names apart.
 */

import type { DogApiBreed } from "./api";

export interface MatchQuery {
  names: string[];
  country: string | null;
  group: string | null;
}

export interface MatchCandidate {
  id: string;
  name: string;
  group: string | null;
  origin: string | null;
  imageUrl: string | null;
}

export type MatchResult =
  | { status: "one"; breed: DogApiBreed }
  | { status: "none" }
  | { status: "many"; candidates: MatchCandidate[] };

const STOP = new Set(["a", "an", "the", "of", "and"]);

/** Names and country codes that refer to the same place. */
const PLACE_GROUPS: readonly (readonly string[])[] = [
  ["gb", "uk", "great britain", "united kingdom", "britain", "england", "scotland", "wales"],
  ["us", "usa", "united states", "united states of america", "america"],
  ["kr", "korea", "south korea", "republic of korea"],
  ["cz", "czech republic", "czechia"],
  ["nl", "netherlands", "holland"],
];

export function matchBreeds(breeds: readonly DogApiBreed[], query: MatchQuery): MatchResult {
  const exact = breeds.filter((breed) => isExact(query.names, breed));
  const pool = exact.length > 0 ? exact : breeds.filter((breed) => isRelated(query.names, breed));
  const chosen = narrow(pool, query);
  if (chosen.length === 1) {
    const breed = chosen[0];
    if (!breed) return { status: "none" };
    return { status: "one", breed };
  }
  if (chosen.length === 0) return { status: "none" };
  return { status: "many", candidates: chosen.map(toCandidate) };
}

export function toCandidate(breed: DogApiBreed): MatchCandidate {
  return {
    id: breed.id,
    name: breed.name,
    group: breed.breed_group ?? null,
    origin: breed.origin ?? null,
    imageUrl: breed.image?.url ?? null,
  };
}

function narrow(breeds: readonly DogApiBreed[], query: MatchQuery): DogApiBreed[] {
  if (breeds.length <= 1) return [...breeds];
  const countryHits = breeds.filter((breed) => countryMatches(query.country, breed));
  if (countryHits.length === 1) return countryHits;
  const pool = countryHits.length > 1 ? countryHits : [...breeds];
  const groupHits = pool.filter((breed) => groupMatches(query.group, breed));
  if (groupHits.length === 1 && groupHits.length < pool.length) return groupHits;
  return countryHits.length > 1 ? countryHits : [...breeds];
}

function isExact(ours: readonly string[], breed: DogApiBreed): boolean {
  const keys = new Set(ours.map(nameKey).filter((key) => key.length > 0));
  return apiNames(breed).some((name) => keys.has(nameKey(name)));
}

function isRelated(ours: readonly string[], breed: DogApiBreed): boolean {
  const oursTokens = ours.map(tokens).filter((list) => list.length > 0);
  return apiNames(breed).some((name) => {
    const apiTokens = tokens(name);
    return oursTokens.some((ourTokens) => relatedTokens(ourTokens, apiTokens));
  });
}

function relatedTokens(left: readonly string[], right: readonly string[]): boolean {
  const a = new Set(left);
  const b = new Set(right);
  let shared = 0;
  for (const token of a) if (b.has(token)) shared += 1;
  if (shared < 2) return false;
  const union = new Set([...a, ...b]).size;
  if (shared / union >= 0.5) return true;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  if (small.size < 2) return false;
  for (const token of small) if (!large.has(token)) return false;
  return true;
}

function apiNames(breed: DogApiBreed): string[] {
  return [breed.name, ...splitList(breed.alt_names)];
}

function countryMatches(ours: string | null, breed: DogApiBreed): boolean {
  if (!ours || !breed.origin) {
    if (!ours || !breed.country_code) return false;
  }
  if (breed.origin && (mentions(breed.origin, ours ?? "") || mentions(ours, breed.origin))) return true;
  const code = (breed.country_code ?? "").toLowerCase();
  for (const group of PLACE_GROUPS) {
    const ourHit = group.some((item) => mentions(ours, item));
    const apiHit = group.some((item) => item === code || mentions(breed.origin, item));
    if (ourHit && apiHit) return true;
  }
  return false;
}

function groupMatches(ours: string | null, breed: DogApiBreed): boolean {
  if (!ours || !breed.breed_group) return false;
  return mentions(ours, breed.breed_group) || mentions(breed.breed_group, ours);
}

function mentions(haystack: string | null | undefined, needle: string | null | undefined): boolean {
  if (!haystack || !needle) return false;
  const text = ` ${normalize(haystack)} `;
  const phrase = normalize(needle);
  return phrase.length > 0 && text.includes(` ${phrase} `);
}

function nameKey(value: string): string {
  return tokens(value).sort().join(" ");
}

function tokens(value: string): string[] {
  return normalize(value)
    .split(" ")
    .filter((word) => word.length > 0 && !STOP.has(word));
}

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/ +/g, " ");
}

function splitList(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}
