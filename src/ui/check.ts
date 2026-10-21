/**
 * Runs the catalog rules and the TypeScript check in fresh processes,
 * then returns the messages for the page.
 */

import { spawn } from "node:child_process";
import { join } from "node:path";

import { rootDir } from "./paths";

export interface IssueRow {
  breed: string | null;
  path: string;
  message: string;
}

export interface CheckResult {
  ok: boolean;
  summary: string;
  errors: IssueRow[];
  warnings: IssueRow[];
}

export async function runCheck(): Promise<CheckResult> {
  const tsx = join(rootDir, "node_modules/tsx/dist/cli.mjs");
  const tsc = join(rootDir, "node_modules/typescript/bin/tsc");
  const [catalog, types] = await Promise.all([
    run([tsx, "src/ui/report-json.ts"]),
    run([tsc, "--noEmit", "--pretty", "false", "-p", "tsconfig.json"]),
  ]);

  const errors: IssueRow[] = [];
  const warnings: IssueRow[] = [];
  let breedCount: number | null = null;
  try {
    const parsed = JSON.parse(catalog.stdout) as {
      breedCount: number;
      errors: IssueRow[];
      warnings: IssueRow[];
    };
    breedCount = parsed.breedCount;
    errors.push(...parsed.errors);
    warnings.push(...parsed.warnings);
  } catch {
    const message = (catalog.stderr || catalog.stdout || "The catalog could not be loaded.").trim();
    errors.push({ breed: null, path: "catalog", message });
  }

  if (types.code !== 0) {
    const text = `${types.stdout}\n${types.stderr}`.trim();
    for (const line of text.split("\n")) {
      if (line.trim()) errors.push({ breed: null, path: "typescript", message: line });
    }
  }

  const summary =
    breedCount === null
      ? "Catalog could not be loaded."
      : `${breedCount} breeds — ${errors.length} error(s), ${warnings.length} warning(s).`;
  return { ok: errors.length === 0, summary, errors, warnings };
}

function run(args: string[]): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, args, { cwd: rootDir });
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.on("close", (code) => resolve({ code: code ?? 1, stdout, stderr }));
  });
}
