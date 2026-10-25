/**
 * Read-only client for The Dog API breed catalogue.
 * The key is read from `.env` at the project root (`THE_DOG_API_KEY`).
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { rootDir } from "../ui/paths";

const BASE = "https://api.thedogapi.com/v1";
const PAGE_SIZE = 100;

export interface DogApiBreed {
  id: string;
  name: string;
  life_span?: string | null;
  temperament?: string | null;
  origin?: string | null;
  country_code?: string | null;
  description?: string | null;
  bred_for?: string | null;
  perfect_for?: string | null;
  breed_group?: string | null;
  history?: string | null;
  alt_names?: string | null;
  weight?: { metric?: string | null } | null;
  height?: { metric?: string | null } | null;
  image?: { url?: string | null } | null;
}

export interface DogApiColour {
  name?: string | null;
}

export interface DogApiFact {
  title?: string | null;
  fact?: string | null;
}

export interface DogApiHealthTip {
  title?: string | null;
  description?: string | null;
}

export class TheDogError extends Error {
  readonly status: number | null;

  constructor(message: string, status: number | null) {
    super(message);
    this.name = "TheDogError";
    this.status = status;
  }
}

let envLoaded = false;
let breedCache: { at: number; breeds: DogApiBreed[] } | null = null;

export function loadEnv(): void {
  if (envLoaded) return;
  envLoaded = true;
  const path = resolve(rootDir, ".env");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

/** Every breed page. A fresh read ignores the ten-minute memory cache. */
export async function listBreeds(fresh = false): Promise<DogApiBreed[]> {
  if (!fresh && breedCache && Date.now() - breedCache.at < 10 * 60 * 1000) {
    return breedCache.breeds;
  }
  const breeds: DogApiBreed[] = [];
  for (let page = 0; page < 20; page += 1) {
    const body = await getJson<unknown>(`/breeds?limit=1000&page=${page}`);
    if (!Array.isArray(body)) {
      throw new TheDogError("The Dog API breed list was not a list.", null);
    }
    breeds.push(...body.filter(isBreed));
    if (body.length < 1000) break;
  }
  breedCache = { at: Date.now(), breeds };
  return breeds;
}

export async function getBreed(id: string): Promise<DogApiBreed> {
  const body = await getJson<unknown>(`/breeds/${encodeURIComponent(id)}`);
  if (!isBreed(body)) {
    throw new TheDogError("The Dog API breed details were not a breed record.", null);
  }
  return body;
}

/** A list endpoint that may be missing from this API plan. A 403 becomes a warning. */
export async function optionalList<T>(
  path: string,
  label: string,
): Promise<{ items: T[]; warning: string | null }> {
  try {
    const body = await getJson<unknown>(path);
    if (!Array.isArray(body)) {
      return { items: [], warning: `${label} returned an unexpected response.` };
    }
    return { items: body as T[], warning: null };
  } catch (error) {
    if (error instanceof TheDogError) {
      return { items: [], warning: `${label} could not be loaded: ${error.message}` };
    }
    throw error;
  }
}

export async function collectPages<T>(
  pathFor: (offset: number) => string,
  label: string,
): Promise<{ items: T[]; warning: string | null }> {
  const items: T[] = [];
  for (let offset = 0; offset <= 5000; offset += PAGE_SIZE) {
    const page = await optionalList<T>(pathFor(offset), label);
    if (page.warning) {
      return { items, warning: items.length === 0 ? page.warning : `${page.warning} Partial results were kept.` };
    }
    items.push(...page.items);
    if (page.items.length < PAGE_SIZE) return { items, warning: null };
  }
  return { items, warning: `${label} stopped after ${items.length} rows.` };
}

async function getJson<T>(path: string): Promise<T> {
  loadEnv();
  const key = process.env.THE_DOG_API_KEY;
  if (!key) {
    throw new TheDogError("THE_DOG_API_KEY is missing from .env.", null);
  }
  let response: Response;
  try {
    response = await fetch(`${BASE}${path}`, { headers: { "x-api-key": key } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "network request failed";
    throw new TheDogError(`The Dog API request failed: ${message}`, null);
  }
  const text = await response.text();
  let body: unknown = null;
  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      throw new TheDogError("The Dog API returned a response that was not JSON.", response.status);
    }
  }
  if (!response.ok) {
    const message =
      body !== null && typeof body === "object" && "message" in body
        ? String((body as { message: unknown }).message)
        : response.statusText;
    throw new TheDogError(message || `The Dog API returned ${response.status}.`, response.status);
  }
  return body as T;
}

function isBreed(value: unknown): value is DogApiBreed {
  if (value === null || typeof value !== "object") return false;
  const record = value as { id?: unknown; name?: unknown };
  return typeof record.id === "string" && typeof record.name === "string";
}
