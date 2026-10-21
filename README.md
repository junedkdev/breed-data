# Breed data

This project authors the dog breed catalog. The Flutter app does not read
these TypeScript files. It reads `data.json`.

```text
breeds/<slug>.ts     one breed
breeds/data.ts        list of every breed
breeds/sources.ts     shared sources
breeds/licenses.ts    shared image licenses
        │
        ▼
   npm run build
        │
        ▼
   data.json          copy this into dog/assets/breed/
```

## Commands

```bash
npm install
npm run check          # type-check the records
npm run validate       # integrity rules on the TypeScript records
npm run build          # validate, then write data.json
npm run validate:json  # integrity rules on data.json
npm test               # validator tests
npm run all            # build, type-check, tests, and JSON check
```

Copy `data.json` into `dog/assets/breed/data.json` after a build. Do not
edit `data.json` by hand.

## Progress

`labels/progress.txt` is the list of breeds and how far each one has got.

- A line ending in `- C` was generated with `labels/chatgpt_prompt.txt`.
- A line ending in `- CG` was then checked with `labels/gemini_prompt.txt`.
- A line with no marker has not been generated yet.

Spacing before the marker varies (`- C`, `-CG`). The marker is the `C` or
`CG` at the end of the line.
