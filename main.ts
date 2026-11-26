// One Emoji, One Smile — make.fun entry.
// Writes the single-emoji entry to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), byte-exact, no trailing newline.
// Node 22, no dependencies. Type annotations are erasable only,
// so the file also runs under Node's type stripping.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI: string = "🥹";

function validate(emoji: string): void {
  const points: string[] = Array.from(emoji);
  if (points.length < 1 || points.length > 8) {
    throw new Error(`entry must be 1-8 characters, got ${points.length}`);
  }
  if (points.length !== 1) {
    throw new Error(`entry must be exactly one emoji, got ${points.length} characters`);
  }
  if (!/^\p{Extended_Pictographic}$/u.test(emoji)) {
    throw new Error("entry must be a single emoji");
  }
  if (emoji.trim() !== emoji || emoji.length === 0) {
    throw new Error("entry must not be empty or padded with whitespace");
  }
  // Revision (coordinator): reject invisible format characters and
  // require the single emoji to encode as exactly 4 UTF-8 bytes.
  if (/[\u200B-\u200F\uFEFF\u00AD]/.test(emoji)) {
    throw new Error("entry contains invisible format characters");
  }
  if (Buffer.byteLength(emoji, "utf8") !== 4) {
    throw new Error("entry must be a single 4-byte emoji");
  }
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(EMOJI);
mkdirSync(outDir, { recursive: true });
const outPath: string = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Read back and verify byte-exactness.
const back: string = readFileSync(outPath, "utf8");
if (back !== EMOJI) {
  throw new Error(`verification failed: wrote ${JSON.stringify(EMOJI)} but read back ${JSON.stringify(back)}`);
}
console.log(`wrote ${outPath}: ${JSON.stringify(back)} (${Array.from(back).length} characters)`);
