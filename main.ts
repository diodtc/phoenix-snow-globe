// phoenix-snow-globe — make.fun bounty ai-excited-01.
// The entry image lives beside this file as entry.png. This program copies
// it, byte for byte, to the output directory as entry.png. Pure copy: no
// randomness, no clock, no network, so every run writes identical bytes.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const source = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
