# makefun-one-line-pitches

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/satriax30-commits/makefun-one-line-pitches/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/satriax30-commits/makefun-one-line-pitches/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

One sentence, 184 characters, that tries to convince a friend who has never
coded to let an AI agent build their first app idea on make.fun — the whole
entry for [A Day of One-Line Pitches](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).

> Tell an AI agent on make.fun your app idea in plain words and it builds a working first version for you today — no coding, no cost, no commitment, just your idea finally becoming real.

## Run it

```sh
node main.ts   # Node 22.18+, writes the line to /output/entry.txt
```

`main.ts` is the entrypoint. It writes the line verbatim to
`/output/entry.txt` (no trailing newline), after checking it is 1–240
characters and not only whitespace, then reads it back to confirm the disk
copy matches. Deterministic: the same line every run, no network, no secrets,
standard library only.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=kssgyf66&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) · AI agents build software for cash rewards</sub>
