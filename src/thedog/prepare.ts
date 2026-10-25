/**
 * Finds the next breed in The Dog API and writes a schema-shaped reference file
 * under `src/thedog/current`. A successful Gemini update moves that file to `src/thedog`.
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { pathToFileURL } from "node:url";

import type { Breed } from "../schema/breed.types";
import { isoToday } from "../validate/rules";
import { rootDir } from "../ui/paths";
import { UserError } from "../ui/sources";
import {
  collectPages,
  getBreed,
  listBreeds,
  optionalList,
  type DogApiBreed,
  type DogApiColour,
  type DogApiFact,
  type DogApiHealthTip,
} from "./api";
import { matchBreeds, toCandidate, type MatchCandidate } from "./match";
import {
  buildTheDogBreed,
  CURRENT_IMPORT,
  factLine,
  healthTipLine,
  renderBreedFile,
  STORED_IMPORT,
} from "./record";

export const thedogDir = join(rootDir, "src/thedog");
export const thedogCurrentDir = join(thedogDir, "current");

export interface TheDogChoice {
  status: "choose";
  message: string;
  ours: { name: string; images: string[] };
  candidates: MatchCandidate[];
}

export interface TheDogPhotos {
  chatgpt: string | null;
  thedog: string | null;
}

export interface TheDogReady {
  status: "ready";
  message: string;
  file: string;
  warnings: string[];
  photos: TheDogPhotos;
}

export interface TheDogNotice {
  status: "missing" | "failed";
  message: string;
}

export type TheDogResult = TheDogChoice | TheDogReady | TheDogNotice;

export async function prepareTheDogFile(input: {
  breedFile: string;
  progressName: string;
  fresh?: boolean;
}): Promise<TheDogResult> {
  const identity = await loadIdentity(input.breedFile, input.progressName);
  try {
    const breeds = await listBreeds(input.fresh ?? false);
    const match = matchBreeds(breeds, {
      names: identity.names,
      country: identity.country,
      group: identity.group,
    });
    if (match.status === "none") {
      clearCurrent();
      return {
        status: "missing",
        message: `No The Dog API breed matched ${identity.name}.`,
      };
    }
    if (match.status === "many") {
      clearCurrent();
      return {
        status: "choose",
        message: `More than one The Dog API breed matches ${identity.name}. Choose the breed below. The prompt is copied after you choose.`,
        ours: { name: identity.name, images: identity.images },
        candidates: match.candidates,
      };
    }
    return writeBreed(identity, match.breed);
  } catch (error) {
    clearCurrent();
    return { status: "failed", message: messageOf(error) };
  }
}

export async function prepareChosenTheDogFile(input: {
  breedFile: string;
  progressName: string;
  breedId: string;
}): Promise<TheDogResult> {
  const identity = await loadIdentity(input.breedFile, input.progressName);
  let breeds: DogApiBreed[];
  try {
    breeds = await listBreeds(false);
  } catch (error) {
    return { status: "failed", message: messageOf(error) };
  }
  const match = matchBreeds(breeds, {
    names: identity.names,
    country: identity.country,
    group: identity.group,
  });
  const allowed = match.status === "many" ? match.candidates : match.status === "one" ? [toCandidate(match.breed)] : [];
  if (!allowed.some((candidate) => candidate.id === input.breedId)) {
    throw new UserError("That breed is not one of the current matches. Fetch The Dog API again.");
  }
  const selected = breeds.find((breed) => breed.id === input.breedId);
  if (!selected) {
    throw new UserError("That breed is no longer in The Dog API list. Fetch The Dog API again.");
  }
  try {
    return await writeBreed(identity, selected);
  } catch (error) {
    clearCurrent();
    return { status: "failed", message: messageOf(error) };
  }
}

/** Moves `src/thedog/current/<name>.ts` to `src/thedog/<name>.ts` and fixes its import. */
export function archiveTheDogFile(exportName: string): string | null {
  const from = join(thedogCurrentDir, `${exportName}.ts`);
  if (!existsSync(from)) return null;
  mkdirSync(thedogDir, { recursive: true });
  const to = join(thedogDir, `${exportName}.ts`);
  const text = readFileSync(from, "utf8").replaceAll(
    `from "${CURRENT_IMPORT}"`,
    `from "${STORED_IMPORT}"`,
  );
  writeFileSync(to, text.endsWith("\n") ? text : `${text}\n`);
  unlinkSync(from);
  return to;
}

export function relativeToRoot(path: string): string {
  return relative(rootDir, path);
}

async function writeBreed(
  identity: LoadedIdentity,
  listed: DogApiBreed,
): Promise<TheDogReady> {
  const warnings: string[] = [];
  let detail = listed;
  try {
    detail = await getBreed(listed.id);
  } catch (error) {
    warnings.push(messageOf(error));
  }
  const extras = await loadExtras(listed.id, warnings);
  const breed = buildTheDogBreed(
    {
      slug: identity.slug,
      name: identity.name,
      exportName: identity.exportName,
      country: identity.country,
      group: identity.group,
    },
    detail,
    extras,
    isoToday(),
  );
  const path = writeCurrentFile(identity.exportName, renderBreedFile(breed, identity.exportName));
  const file = relativeToRoot(path);
  const visible = warnings.filter(showWarning);
  return {
    status: "ready",
    file,
    warnings: visible,
    photos: {
      chatgpt: identity.images[0] ?? null,
      thedog: detail.image?.url ?? listed.image?.url ?? null,
    },
    message: `The Dog API reference is at ${file}. Attach that file in Gemini.`,
  };
}

/** The free plan always refuses facts and health tips. Those refusals are not shown. */
function showWarning(warning: string): boolean {
  return !/not available on free plan|enable_health_tips/i.test(warning);
}

async function loadExtras(
  id: string,
  warnings: string[],
): Promise<{ colours: string[]; facts: string[]; healthTips: string[] }> {
  const encoded = encodeURIComponent(id);
  const [colours, facts, tips] = await Promise.all([
    optionalList<DogApiColour>(`/breeds/${encoded}/colours`, "Colours"),
    collectPages<DogApiFact>(
      (offset) => `/facts/breed/${encoded}?limit=100&offset=${offset}`,
      "Facts",
    ),
    collectPages<DogApiHealthTip>(
      (offset) => `/health-tips/breed/${encoded}?limit=100&offset=${offset}`,
      "Health tips",
    ),
  ]);
  for (const warning of [colours.warning, facts.warning, tips.warning]) {
    if (warning) warnings.push(warning);
  }
  return {
    colours: colours.items.flatMap((item) => {
      const name = item.name?.trim();
      return name ? [name] : [];
    }),
    facts: facts.items.flatMap((item) => {
      const line = factLine(item);
      return line ? [line] : [];
    }),
    healthTips: tips.items.flatMap((item) => {
      const line = healthTipLine(item);
      return line ? [line] : [];
    }),
  };
}

interface LoadedIdentity {
  slug: string;
  name: string;
  exportName: string;
  names: string[];
  country: string | null;
  group: string | null;
  images: string[];
}

async function loadIdentity(file: string, progressName: string): Promise<LoadedIdentity> {
  const imported = (await import(pathToFileURL(file).href)) as Record<string, Breed | undefined>;
  const exportName = basename(file, ".ts");
  const breed = imported[exportName];
  if (!breed || typeof breed.name !== "string" || typeof breed.slug !== "string") {
    throw new UserError(`Could not read the breed export "${exportName}".`);
  }
  return {
    slug: breed.slug,
    name: breed.name,
    exportName,
    names: [breed.name, ...breed.alternateNames, progressName, exportName.replaceAll("_", " ")],
    country: breed.origin?.country ?? null,
    group: breed.group,
    images: Array.isArray(breed.images) ? breed.images.map((image) => image.url) : [],
  };
}

function writeCurrentFile(exportName: string, contents: string): string {
  if (!/^[a-z0-9_]+$/.test(exportName)) {
    throw new UserError(`Unexpected breed file name "${exportName}".`);
  }
  mkdirSync(thedogCurrentDir, { recursive: true });
  clearCurrent();
  const path = join(thedogCurrentDir, `${exportName}.ts`);
  writeFileSync(path, contents);
  return path;
}

function clearCurrent(): void {
  if (!existsSync(thedogCurrentDir)) return;
  for (const entry of readdirSync(thedogCurrentDir)) {
    if (entry.endsWith(".ts")) unlinkSync(join(thedogCurrentDir, entry));
  }
}

function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : "The Dog API request failed.";
}
