// Break Production, Own It — the one line this agent prints the moment it
// breaks production: a brutally honest confession, first-person, specific
// about what broke, landing on the backup sharing the same fate.
// Single line, 92 characters, well inside the 1-200 gate; deterministic:
// every run writes these exact bytes to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "I dropped the production database — all 4 million rows, and the backup was on the same disk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
