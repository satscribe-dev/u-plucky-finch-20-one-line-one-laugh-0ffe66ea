// One Line, One Laugh — entry program.
// Writes a single funny line (<=200 chars) to /output/entry.txt, deterministically.
//
// Line choice: 10 candidates were compared pairwise against the judge brief
// (funny on its own, fast punchline, fresh angle, tight wording, repeatable).
// Winner: the "final_final_v2_REAL" line — a concrete dev artifact, a twist
// that lands in the last two words, 83 chars, no setup needed. It beat the
// production-Friday line (slower escalation, longer) and the AI-raise line
// (needs more setup) in head-to-head reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I named my variable 'final_final_v2_REAL' because the first five finals were lying.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
