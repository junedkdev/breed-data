/**
 * The actions behind the local page.
 * Copying a prompt marks the breed in progress. Saving the reply moves it forward.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

import {
  nextChatgpt,
  nextGemini,
  readProgress,
  withStatus,
  writeProgress,
  type ProgressBreed,
} from "../progress/file";
import {
  applySources,
  cleanFileName,
  createEmptyBreedFile,
  fileKey,
  findBreedFile,
  prepareBreedFile,
  replaceExistingBreedFile,
  saveBreedFile,
  sourceSummary,
} from "./records";
import { chatgptPromptPath, geminiPromptPath, progressPath } from "./paths";
import { parseSourcePaste, UserError } from "./sources";

export interface PageState {
  counts: Record<string, number>;
  chatgpt: ProgressBreed | null;
  gemini: ProgressBreed | null;
  chatgptFile: string;
  geminiFile: string | null;
  rows: ProgressBreed[];
}

export function loadState(): PageState {
  const rows = readRows();
  const chatgpt = nextChatgpt(rows);
  const gemini = nextGemini(rows);
  const counts: Record<string, number> = { waiting: 0, R: 0, C: 0, CR: 0, CG: 0 };
  for (const row of rows) {
    const key = row.status || "waiting";
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return {
    counts,
    chatgpt,
    gemini,
    chatgptFile: chatgpt ? fileKey(chatgpt.name) : "",
    geminiFile: gemini ? findBreedFile(gemini.name) : null,
    rows,
  };
}

/** Fills in the breed name and marks that breed R, unless it is already R. */
export function copyChatgptPrompt(): { prompt: string; breed: ProgressBreed; filename: string } {
  const rows = readRows();
  const breed = nextChatgpt(rows);
  if (!breed) throw new UserError("Every breed in the progress list already has a ChatGPT record.");
  if (breed.status === "") saveRows(withStatus(rows, breed.index, "R"));
  const prompt = readFileSync(chatgptPromptPath, "utf8").replaceAll(
    "[ENTER BREED NAME HERE]",
    breed.name,
  );
  return {
    prompt,
    breed: { ...breed, status: "R" },
    filename: fileKey(breed.name),
  };
}

export function createBreedFile(filename: string): { path: string } {
  return { path: createEmptyBreedFile(filename) };
}

export function addChatgptRecord(input: {
  filename: string;
  content: string;
  sources: string;
}): { message: string } {
  const rows = readRows();
  const breed = rows.find((row) => row.status === "R");
  if (!breed) throw new UserError("Copy the ChatGPT prompt first. That marks the breed as R.");
  const filename = cleanFileName(input.filename);
  // Check both pastes before writing, so a bad paste does not leave a half-saved breed.
  prepareBreedFile(input.content, filename);
  parseSourcePaste(input.sources);
  const path = saveBreedFile(filename, input.content);
  const sourceMessage = sourceSummary(applySources(input.sources));
  saveRows(withStatus(rows, breed.index, "C"));
  return {
    message: `Saved ${breed.index}:${breed.name} as C. Wrote ${path}. ${sourceMessage}`,
  };
}

/** Appends the current breed file and marks that breed CR, unless it is already CR. */
export function copyGeminiPrompt(): { prompt: string; breed: ProgressBreed; file: string } {
  const rows = readRows();
  const breed = nextGemini(rows);
  if (!breed) throw new UserError("No ChatGPT breed is waiting for Gemini.");
  const file = findBreedFile(breed.name);
  if (!file) {
    throw new UserError(
      `No file found for ${breed.name}. Expected src/breeds/${fileKey(breed.name)}.ts.`,
    );
  }
  if (breed.status === "C") saveRows(withStatus(rows, breed.index, "CR"));
  const prompt = `${readFileSync(geminiPromptPath, "utf8").trimEnd()}\n\n${readFileSync(file, "utf8")}`;
  return { prompt, breed: { ...breed, status: "CR" }, file };
}

export function updateGeminiRecord(input: { content: string; sources: string }): { message: string } {
  const rows = readRows();
  const breed = rows.find((row) => row.status === "CR");
  if (!breed) throw new UserError("Copy the Gemini prompt first. That marks the breed as CR.");
  const file = findBreedFile(breed.name);
  if (!file) throw new UserError(`No file found for ${breed.name}.`);
  prepareBreedFile(input.content, basename(file, ".ts"));
  parseSourcePaste(input.sources);
  replaceExistingBreedFile(file, input.content);
  const sourceMessage = sourceSummary(applySources(input.sources));
  saveRows(withStatus(rows, breed.index, "CG"));
  return {
    message: `Updated ${breed.index}:${breed.name} as CG. Wrote ${file}. ${sourceMessage}`,
  };
}

function readRows(): ProgressBreed[] {
  return readProgress(readFileSync(progressPath, "utf8"));
}

function saveRows(rows: ProgressBreed[]): void {
  writeFileSync(progressPath, writeProgress(rows));
}
