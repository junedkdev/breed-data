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
import { archiveTheDogFile, prepareChosenTheDogFile, prepareTheDogFile, relativeToRoot, type TheDogResult } from "../thedog/prepare";
import { chatgptPromptPath, geminiPromptPath, progressPath } from "./paths";
import { parseSourcePaste, UserError } from "./sources";

export interface GeminiPromptResult {
  prompt: string;
  breed: ProgressBreed;
  file: string;
  /** False while the user still has to choose between several The Dog API breeds. */
  copyPrompt: boolean;
  thedog: TheDogResult;
}

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

/** Appends the current breed file, marks that breed CR, and writes a The Dog API reference when one breed matches. */
export async function copyGeminiPrompt(): Promise<GeminiPromptResult> {
  const rows = readRows();
  const breed = nextGemini(rows);
  if (!breed) throw new UserError("No ChatGPT breed is waiting for Gemini.");
  if (breed.status === "C") saveRows(withStatus(rows, breed.index, "CR"));
  return finishGemini({ ...breed, status: "CR" }, false);
}

/** Runs the The Dog API lookup again for the breed already marked CR. */
export async function retryGeminiTheDog(): Promise<GeminiPromptResult> {
  const breed = readRows().find((row) => row.status === "CR");
  if (!breed) throw new UserError("Copy the Gemini prompt first. That marks the breed as CR.");
  return finishGemini(breed, true);
}

/** Writes the reference file for the The Dog API breed the user picked, then the prompt can be copied. */
export async function chooseGeminiTheDog(breedId: string): Promise<GeminiPromptResult> {
  const id = breedId.trim();
  if (!id) throw new UserError("Choose a breed first.");
  const breed = readRows().find((row) => row.status === "CR");
  if (!breed) throw new UserError("Copy the Gemini prompt first. That marks the breed as CR.");
  const file = requireBreedFile(breed.name);
  const thedog = await prepareChosenTheDogFile({
    breedFile: file,
    progressName: breed.name,
    breedId: id,
  });
  return {
    prompt: geminiPrompt(file),
    breed,
    file,
    copyPrompt: thedog.status !== "choose",
    thedog,
  };
}

export function updateGeminiRecord(input: {
  content: string;
  sources: string;
}): { message: string; points: string[] } {
  const rows = readRows();
  const breed = rows.find((row) => row.status === "CR");
  if (!breed) throw new UserError("Copy the Gemini prompt first. That marks the breed as CR.");
  const file = findBreedFile(breed.name);
  if (!file) throw new UserError(`No file found for ${breed.name}.`);
  prepareBreedFile(input.content, basename(file, ".ts"));
  parseSourcePaste(input.sources);
  replaceExistingBreedFile(file, input.content);
  const sourceMessage = sourceSummary(applySources(input.sources));
  const archived = archiveTheDogFile(basename(file, ".ts"));
  const archiveMessage = archived
    ? `The Dog API reference is at ${relativeToRoot(archived)}.`
    : "src/thedog/current had no The Dog API reference for this breed.";
  saveRows(withStatus(rows, breed.index, "CG"));
  const points = [
    `Updated ${breed.index}:${breed.name} as CG.`,
    `Wrote ${file}.`,
    sourceMessage,
    archiveMessage,
  ];
  return { message: points.join(" "), points };
}

async function finishGemini(breed: ProgressBreed, fresh: boolean): Promise<GeminiPromptResult> {
  const file = requireBreedFile(breed.name);
  const thedog = await prepareTheDogFile({
    breedFile: file,
    progressName: breed.name,
    fresh,
  });
  return {
    prompt: geminiPrompt(file),
    breed,
    file,
    copyPrompt: thedog.status !== "choose",
    thedog,
  };
}

function requireBreedFile(name: string): string {
  const file = findBreedFile(name);
  if (!file) {
    throw new UserError(`No file found for ${name}. Expected src/breeds/${fileKey(name)}.ts.`);
  }
  return file;
}

function geminiPrompt(file: string): string {
  return `${readFileSync(geminiPromptPath, "utf8").trimEnd()}\n\n${readFileSync(file, "utf8")}`;
}

function readRows(): ProgressBreed[] {
  return readProgress(readFileSync(progressPath, "utf8"));
}

function saveRows(rows: ProgressBreed[]): void {
  writeFileSync(progressPath, writeProgress(rows));
}
