import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

/** Project root. `data.json` stays here; everything else authored lives in `src`. */
export const rootDir = resolve(here, "../..");
export const breedsDir = resolve(rootDir, "src/breeds");
export const sourcesPath = resolve(rootDir, "src/registry/sources.ts");
export const dataPath = resolve(rootDir, "src/breeds/data.ts");
export const progressPath = resolve(rootDir, "src/progress/progress.txt");
export const chatgptPromptPath = resolve(rootDir, "src/prompts/chatgpt.txt");
export const geminiPromptPath = resolve(rootDir, "src/prompts/gemini.txt");
export const publicDir = resolve(here, "public");
