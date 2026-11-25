import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the fridge has been awake all night guarding the same
// leftovers for six days, and it knows exactly why its owner is here
// at 3am — not hunger, but hope. The punchline lands on the most
// anticlimactic thing a fridge can confess to holding: hummus.
const LINE =
  "3am. I have kept your leftovers cold for six days and you still open me hoping for a miracle. There is no miracle. There is hummus.";

// Gate guard: the sealed scorer requires UTF-8 text of 1–140
// characters, not only whitespace, on a single line. Fail loudly
// here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || /\n/.test(LINE) || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
