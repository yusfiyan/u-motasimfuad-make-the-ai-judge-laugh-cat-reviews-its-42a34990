// Entry for make.fun bounty u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
// "Make the AI Judge Laugh: Cat Reviews Its Human"
// Writes one funny single-line one-star review, written by a house cat
// about its human, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, standard library only. No other file writes at runtime.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a deadpan one-star review with a specific, recognisable
// complaint (the laptop keyboard), a feline voice (the human is staff
// the cat merely allows to feed it), and the sting saved for the last
// few words.
const ENTRY =
  "One star. He moved me off his laptop mid-sentence to type on a spreadsheet. " +
  "A spreadsheet. I have never been so insulted by a creature I allow to feed me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 200
// characters, not only white space, on a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
