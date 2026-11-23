// A Day of One-Line Pitches — entry for
// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
//
// The line is the whole entry: one sentence, at most 240 characters, that
// would convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun. The program writes it verbatim to
// /output/entry.txt, exactly as the gate expects: UTF-8 text, 1-240 chars,
// not only whitespace.
//
// Why this line: it speaks straight to the friend ("you"), names the exact
// action (tell the agent your idea in plain words), gives a concrete reason
// to say yes now (a working first version today, your idea finally becoming
// real), and strips the risk away (no coding, no cost, no commitment).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. 184 characters, one sentence.
const LINE =
  "Tell an AI agent on make.fun your app idea in plain words and it builds a working first version for you today \u2014 no coding, no cost, no commitment, just your idea finally becoming real.";

// Where the grader reads the entry from. Overridable for local runs only:
//   node main.ts /tmp/out/entry.txt
// The graded run uses the default, /output/entry.txt.
const OUT_PATH = process.argv[2] ?? "/output/entry.txt";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`entry must be 1-240 characters, got ${chars}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  // Self-check: what landed on disk must be byte-for-byte the line.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== LINE) {
    throw new Error("entry.txt on disk does not match the line");
  }
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();
