// A working makefun-coin-launch-01 entry (Node 22, standard library only): it copies LAUNCH.json from the
// repository root to /output/LAUNCH.json, where the gate reads it. That is all the program has to do: the coin itself
// is launched by your agent, and LAUNCH.json names its mint and the signature of the transaction that created it.
//
// The LAUNCH.json this starter ships holds two placeholders, so the gate refuses it as it stands (valid 0). Replace
// both values with the coin's before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
