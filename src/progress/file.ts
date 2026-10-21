/**
 * Progress list for breed authoring.
 *
 * One breed per line: `38:gascon_saintongeois` or `14:coton_de_tulear - C`.
 *
 *   (empty)  not started
 *   R        ChatGPT prompt copied, waiting for the reply
 *   C        ChatGPT record saved
 *   CR       Gemini prompt copied, waiting for the reply
 *   CG       Gemini record saved
 *
 * Saving the file groups breeds in that order. A breed that changes status
 * moves to the end of its new group, which is the same result as moving the
 * line up by hand.
 */

export type BreedStatus = "" | "R" | "C" | "CR" | "CG";

export interface ProgressBreed {
  index: number;
  name: string;
  status: BreedStatus;
}

const LINE = /^(\d+)\s*:\s*(.+)$/;
/** CG and CR are listed before C and R so the shorter marker does not win. */
const STATUS = /^(.*?)(?:\s*-\s*(CG|CR|C|R))\s*$/;
const GROUP_ORDER: readonly BreedStatus[] = ["CG", "CR", "C", "R", ""];

export function readProgress(text: string): ProgressBreed[] {
  const rows: ProgressBreed[] = [];
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = LINE.exec(trimmed);
    const indexText = match?.[1];
    const rest = match?.[2];
    if (!indexText || !rest) continue;

    let name = rest;
    let status: BreedStatus = "";
    const statusMatch = STATUS.exec(rest);
    const statusName = statusMatch?.[1];
    const statusCode = statusMatch?.[2];
    if (statusName !== undefined && isStatus(statusCode)) {
      name = statusName;
      status = statusCode;
    }
    rows.push({ index: Number(indexText), name: name.trim(), status });
  }
  return rows;
}

export function writeProgress(rows: readonly ProgressBreed[]): string {
  const groups = GROUP_ORDER.map((status) => rows.filter((row) => row.status === status)).filter(
    (group) => group.length > 0,
  );
  const body = groups.map((group) => group.map(formatRow).join("\n")).join("\n\n");
  return (
    "# Status: empty = waiting, R = ChatGPT started, C = ChatGPT done, CR = Gemini started, CG = Gemini verified\n\n" +
    `${body}\n`
  );
}

/** The breed whose ChatGPT prompt should be copied: the open R, or the first waiting breed. */
export function nextChatgpt(rows: readonly ProgressBreed[]): ProgressBreed | null {
  return rows.find((row) => row.status === "R") ?? rows.find((row) => row.status === "") ?? null;
}

/** The breed whose Gemini prompt should be copied: the open CR, or the first ChatGPT-done breed. */
export function nextGemini(rows: readonly ProgressBreed[]): ProgressBreed | null {
  return rows.find((row) => row.status === "CR") ?? rows.find((row) => row.status === "C") ?? null;
}

export function withStatus(
  rows: readonly ProgressBreed[],
  index: number,
  status: BreedStatus,
): ProgressBreed[] {
  return rows.map((row) => (row.index === index ? { ...row, status } : row));
}

function formatRow(row: ProgressBreed): string {
  return row.status ? `${row.index}:${row.name} - ${row.status}` : `${row.index}:${row.name}`;
}

function isStatus(value: string | undefined): value is Exclude<BreedStatus, ""> {
  return value === "R" || value === "C" || value === "CR" || value === "CG";
}
