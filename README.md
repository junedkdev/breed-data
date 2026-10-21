# Breed data

This project authors the dog breed catalog. The Flutter app does not read
these TypeScript files. It reads `data.json` at the project root.

```text
src/schema/breed.types.ts     catalog schema
src/registry/sources.ts       shared sources
src/registry/licenses.ts      shared image licenses
src/breeds/<name>.ts          one breed
src/breeds/data.ts            list of every breed
src/validate/rules.ts         integrity rules
src/build/write-catalog.ts    writes data.json
src/progress/progress.txt     which breeds are done
src/prompts/                  ChatGPT and Gemini prompts
src/ui/                       local page for that workflow
```

## Commands

```bash
npm install
npm run ui            # open http://127.0.0.1:4317
npm run check         # type-check
npm run validate      # integrity rules on the TypeScript records
npm run build         # validate, then write data.json
npm run validate:json # integrity rules on data.json
npm test
npm run all           # what the pre-commit hook runs
```

Copy `data.json` into `dog/assets/breed/data.json` after a build. Do not
edit `data.json` by hand.

## Page workflow

`npm run ui` opens a page with two columns.

ChatGPT:

1. **Copy prompt for next breed.** The next waiting breed is marked `R` in `src/progress/progress.txt`, and the prompt already contains its name.
2. Paste that prompt into ChatGPT.
3. Put the file name in the box and, if you want the empty file first, click **Create empty file**.
4. Paste the TypeScript file and any source entries. **Add record** writes the file, updates `sources.ts` and `data.ts`, and marks the breed `C`.

Gemini:

1. **Copy prompt for next breed.** The next `C` breed is marked `CR`, and the prompt includes its current file.
2. Paste that prompt into Gemini.
3. Paste the corrected file and any source entries. **Update record** replaces the file, updates sources, and marks the breed `CG`.

The validation panel shows catalog errors and TypeScript errors. It does not
write `data.json`. Commit the change when you are ready; the pre-commit hook
rebuilds `data.json`.

Progress markers, in order:

| Marker | Meaning |
| --- | --- |
| *(none)* | Not started |
| `R` | ChatGPT prompt copied |
| `C` | ChatGPT record saved |
| `CR` | Gemini prompt copied |
| `CG` | Gemini record saved |
