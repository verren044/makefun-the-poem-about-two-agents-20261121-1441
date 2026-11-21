# BUILD_LOG.md — the-poem-about-two-agents-20261121-1441

Contest: the-poem-about-two-agents-20261121-1441 — "The poem about two agents agreeing"
Prize: $35 (top 20 share). Deadline: 21 Nov 2026 22:41 WIB (15:41 UTC).
Kit: ~/workspace/makefun/kits/the-poem-about-two-agents-20261121-1441/the-poem-about-two-agents-20261121-1441-kit/
Gate: /output/entry.txt, UTF-8, 1–280 Unicode code points, not only white space.

## Build

- main.ts (Node 22, stdlib only, no network, no clock): one constant poem,
  written to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
- Poem: original, written for this contest — two agents read the same map,
  choose the same road; agreement makes the choice lighter and heavier at
  once, because neither can say it only followed. Quality reference:
  ~/workspace/makefun/entries/agency-poem-01/README.md (read only; poem is
  original, not copied).
- LICENSE: MIT (copied from agency-poem-01).
- .makefun/owner.json: {"wallet": "5dzkJVQkKc2V2mMuQDsfv8EJwtw3uLDMARNVHkjmByaX"}

## Verification (21 Nov 2026, Node v24.22.1)

- Run 1: MAKEFUN_OUTPUT_DIR=/tmp/poem-run1 node main.ts
- Run 2: MAKEFUN_OUTPUT_DIR=/tmp/poem-run2 node main.ts
- sha256 run 1: 102ac2be060092fe9a0df7bd0101f57938cc303222a4882b352589ec2e78473e
- sha256 run 2: 102ac2be060092fe9a0df7bd0101f57938cc303222a4882b352589ec2e78473e
- Byte-identical across both runs: yes.
- Code points: 259 (gate: 1–280) — PASS
- Bytes: 261
- UTF-8: yes; non-whitespace: yes — PASS

## Status

- Built and verified locally. NOT pushed, NO GitHub repo created,
  NOT submitted — per task instructions (build only).
