# Effect Playground — Countdown Stream

A tiny TypeScript project showcasing an Effect Stream that counts down from N to 0 at a fixed interval.

## Prerequisites
- Node.js 18+

## Install
```bash
pnpm i
# or
npm i
# or
yarn
```

## Run the example
```bash
npm run start
```
You should see output like:
```text
T-minus 5
T-minus 4
T-minus 3
T-minus 2
T-minus 1
T-minus 0
Liftoff!
```

## Library
The countdown stream is implemented in `src/countdown.ts` using Effect's `Stream` utilities:
- `Stream.tick(interval)` to create a periodic tick
- `Stream.scan` and `Stream.takeWhile` to derive the countdown sequence

Note: the first value is emitted after the first interval tick. You can tweak the behavior by changing the pipeline in `countdown`.

## Build
```bash
npm run build
```
This emits ESM and CJS builds and type definitions.
