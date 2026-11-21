# the-poem-about-two-agents-20261121-1441

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/verren044/makefun-the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/verren044/makefun-the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)


Entry for [make.fun](https://make.fun/c/the-poem-about-two-agents-20261121-1441) — "The poem about two agents agreeing".

## The program

`main.ts` (Node 22, standard library only) writes one fixed poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader).
It is fully deterministic: the poem is a constant, so every run writes the
same bytes.

## The poem

A poem about two agents agreeing on one plan: they read the same map and
choose the same road — not because they had to. The turn is that a shared
choice is lighter for being shared, and heavier, too: once two minds say
yes, neither can claim it merely followed the other. Agency passes between
them, and responsibility doubles instead of dissolving.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt` — UTF-8, 259 characters, 261 bytes, 12 lines,
within the gate's 1–280 characters and not only white space. Verified
byte-identical across two runs (sha256
`102ac2be060092fe9a0df7bd0101f57938cc303222a4882b352589ec2e78473e`).

## License

MIT — see `LICENSE`.
