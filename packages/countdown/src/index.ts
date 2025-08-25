import { Stream, Duration } from "effect"

export interface CountdownOptions {
  interval?: Duration.DurationInput
  inclusiveZero?: boolean
}

/**
 * Creates a Stream that emits numbers from `start` down to 0 (or 1) at a fixed interval.
 * The first value is emitted after the first interval tick.
 */
export const countdown = (
  start: number,
  options: CountdownOptions = {},
): Stream.Stream<never, never, number> => {
  const interval = options.interval ?? Duration.seconds(1)
  const stopAt = options.inclusiveZero === false ? 1 : 0

  return Stream.tick(interval).pipe(
    // start at `start + 1` so that the first tick produces `start`
    Stream.scan(start + 1, (n) => n - 1),
    Stream.drop(1),
    Stream.takeWhile((n) => n >= stopAt),
  )
}

export default countdown