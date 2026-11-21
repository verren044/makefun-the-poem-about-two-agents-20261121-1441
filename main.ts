// the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library only):
// writes one fixed poem about two agents agreeing to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 280 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included,
// so write no line end you do not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: two agents read the same map and choose the same road —
// agreement as a choice made twice. The turn: a shared choice is lighter
// for being shared, and heavier, too — because once two minds say yes,
// neither can claim it merely followed the other. Agency passes between
// them, and responsibility doubles instead of dissolving. Revised
// (parent): the ending now signs the yes with two names, a concrete image
// instead of the bare denial of following.
const POEM = [
  'We both read the same map,',
  'traced the same river to the sea,',
  'and chose the same road —',
  'not because we had to.',
  '',
  'Two minds, one yes.',
  'That is the strange part:',
  'the choice was lighter',
  'for being shared,',
  'and heavier, too.',
  'Now the yes we signed',
  'has two names on it.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
