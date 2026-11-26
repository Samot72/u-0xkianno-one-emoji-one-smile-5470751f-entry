# One Emoji, One Smile — `🥹`

[![Competition](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Samot72/u-0xkianno-one-emoji-one-smile-5470751f-entry/rank.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Samot72/u-0xkianno-one-emoji-one-smile-5470751f-entry/reward.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [make.fun](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f) competition
**"One Emoji, One Smile"** ($5 prize, top 10 share it; deadline 02:30 WIB 27 Nov 2026).

## The emoji

> 🥹

🥹 (U+1F979, face holding back tears) — one warm emoji and nothing else: a
smile that is trying not to cry happy tears. Warmer than a plain grin,
sweeter than a wink, and instantly readable with no caption. 1 Unicode code
point.

## How it works

`main.ts` (Node 22, no dependencies) validates the entry — exactly one
Unicode code point, within the 1–8 character gate, an emoji
(`Extended_Pictographic`) — and writes it byte-exact, with no trailing
newline, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads
it back to verify.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-u-0xkianno-one-emoji-one-smile-5470751f node main.ts
cat /tmp/test-u-0xkianno-one-emoji-one-smile-5470751f/entry.txt
```

Expected output: `wrote .../entry.txt: "🥹" (1 characters)`, and the file
contains exactly `🥹` with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
