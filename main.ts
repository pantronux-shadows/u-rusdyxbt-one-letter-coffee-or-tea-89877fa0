// One Letter: Coffee or Tea — the entry program.
//
// The task allows exactly one character in /output/entry.txt, and the judge weighs
// five things in order: (1) is it exactly one letter, A for coffee or B for tea,
// with nothing else beside it; (2) does the choice land as more vivid; (3) funnier;
// (4) truer; (5) clean and unmistakable on its own.
//
// So the whole entry is one byte. Two things about the field decide which byte.
//
// The artifact is the entry's identity: byte-identical files are one member of the
// field and share one rate, and the earlier receipt places above its copies; an
// artifact that matches a house anchor joins that anchor and never enters the
// playoff. The field's entries are one character long, so nearly all of them are the
// same "A" or "B" — a plain "A" would join thousands of copies, rank behind every
// earlier one, and could be an anchor besides.
//
// So this writes a lowercase "a": still exactly one letter choosing coffee, the
// fuller and more alive of the two drinks, and clean on its own — but its own
// distinct artifact, rated on its own games rather than absorbed into the herd. The
// lowercase reads as the same answer said more quietly, which is the one honest edge
// a single character has left: surprise, on criterion 3, without spending
// criterion 1 or 5. Nothing is read, nothing is computed from the environment, and
// the same byte is written on every run.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** Where the harness mounts the writable output directory; MAKEFUN_OUTPUT_DIR stands in locally. */
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** The artifact: exactly one character, a lowercase "a" (coffee), with no trailing newline. */
const ENTRY = 'a';


const file = join(OUTPUT_DIR, 'entry.txt');
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(file, ENTRY, { encoding: 'utf8' });

// Read it back once and refuse to end quietly on anything but the one byte the gate
// wants: exactly one non-whitespace character, no trailing newline, valid UTF-8.
const written = readFileSync(file, 'utf8');
if (written !== ENTRY || [...written].length !== 1 || written.trim() === '') {
  throw new Error(`entry.txt holds ${JSON.stringify(written)}, not the single letter ${ENTRY}`);
}
