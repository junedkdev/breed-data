/**
 * Reads and writes breed files and the breed list in data.ts.
 * Validation rules are not applied here; the check step does that after a save.
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

import { breedsDir, dataPath, sourcesPath } from "./paths";
import { mergeSources, parseSourcePaste, stripFence, UserError } from "./sources";

/** Turns a progress label such as `cirneco_dell'etna` into `cirneco_dell_etna`. */
export function fileKey(name: string): string {
  return name
    .replace(/\.ts$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");
}

export function cleanFileName(input: string): string {
  const name = input.trim().replace(/\.ts$/i, "");
  if (!/^[a-z0-9_]+$/.test(name)) {
    throw new UserError("File name must use lowercase letters, numbers, and underscores.");
  }
  return name;
}

export function breedFilePath(name: string): string {
  return join(breedsDir, `${name}.ts`);
}

/** Finds the TypeScript file for a progress label, allowing punctuation differences. */
export function findBreedFile(progressName: string): string | null {
  const key = fileKey(progressName);
  for (const file of readdirSync(breedsDir)) {
    if (!file.endsWith(".ts") || file === "data.ts") continue;
    if (fileKey(file) === key) return join(breedsDir, file);
  }
  return null;
}

/** Checks the paste and rewrites the schema import to this project's layout. */
export function prepareBreedFile(content: string, fileName: string): string {
  const text = stripFence(content)
    .replaceAll('from "./breed.types"', 'from "../schema/breed.types"')
    .replaceAll("from './breed.types'", "from '../schema/breed.types'");
  if (!text) throw new UserError("Paste the breed file first.");
  const exported = /export\s+const\s+([A-Za-z0-9_]+)/.exec(text)?.[1];
  if (!exported) throw new UserError("The file must contain `export const name`.");
  if (exported !== fileName) {
    throw new UserError(
      `The file exports "${exported}" but the file name is "${fileName}". Use the same name.`,
    );
  }
  return text.endsWith("\n") ? text : `${text}\n`;
}

export function createEmptyBreedFile(fileName: string): string {
  const name = cleanFileName(fileName);
  const path = breedFilePath(name);
  if (existsSync(path)) throw new UserError(`${name}.ts already exists.`);
  writeFileSync(path, "");
  return path;
}

export function saveBreedFile(fileName: string, content: string): string {
  const prepared = prepareBreedFile(content, fileName);
  const path = breedFilePath(fileName);
  writeFileSync(path, prepared);
  writeFileSync(dataPath, registerBreed(readFileSync(dataPath, "utf8"), fileName));
  return path;
}

export function replaceExistingBreedFile(path: string, content: string): void {
  const fileName = basename(path, ".ts");
  writeFileSync(path, prepareBreedFile(content, fileName));
  writeFileSync(dataPath, registerBreed(readFileSync(dataPath, "utf8"), fileName));
}

export function applySources(pasted: string): { added: string[]; updated: string[] } {
  const entries = parseSourcePaste(pasted);
  if (entries.length === 0) return { added: [], updated: [] };
  const merged = mergeSources(readFileSync(sourcesPath, "utf8"), entries);
  writeFileSync(sourcesPath, merged.text);
  return { added: merged.added, updated: merged.updated };
}

export function sourceSummary(result: { added: string[]; updated: string[] }): string {
  if (result.added.length === 0 && result.updated.length === 0) return "No source changes.";
  const parts: string[] = [];
  if (result.added.length > 0) parts.push(`added ${result.added.join(", ")}`);
  if (result.updated.length > 0) parts.push(`updated ${result.updated.join(", ")}`);
  return `Sources: ${parts.join("; ")}.`;
}

function registerBreed(dataText: string, name: string): string {
  let text = dataText;
  const importLine = `import { ${name} } from "./${name}";`;
  if (!text.includes(importLine)) {
    const at = text.lastIndexOf("\nimport {");
    if (at < 0) throw new UserError("data.ts is missing breed imports.");
    const lineEnd = text.indexOf("\n", at + 1);
    text = `${text.slice(0, lineEnd)}\n${importLine}${text.slice(lineEnd)}`;
  }
  const list = /export const breedData[\s\S]*?\[([\s\S]*?)\]\s*;/.exec(text);
  const body = list?.[1];
  if (body === undefined) throw new UserError("Could not read the breedData list.");
  const names = body
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (names.includes(name)) return text;
  return text.replace(/\n\];\s*$/, `\n  ${name},\n];\n`);
}
