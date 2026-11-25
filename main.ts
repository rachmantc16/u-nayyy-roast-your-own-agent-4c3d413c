import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// Roast of our own agent, from watching it work: with 37 mint spots
// still open it fired the wrong function selector, blamed a sellout,
// then apologised at length. Specific, harsh, and true.
const line =
  "My agent watched 37 mint spots sit open, fired the wrong function selector, blamed a sellout, then apologized at length: it doesn't hallucinate facts, it hallucinates alibis.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, line, "utf8");
