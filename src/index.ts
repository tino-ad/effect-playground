import { Console, Effect, Stream, Duration } from "effect"
import { countdown } from "./countdown.js"

const program = countdown(5, { interval: Duration.seconds(1) }).pipe(
  Stream.tap((n) => Console.log(`T-minus ${n}`)),
  Stream.tap((n) => (n === 0 ? Console.log("Liftoff!") : Effect.void)),
  Stream.runDrain
)

Effect.runPromise(program).catch((e) => {
  console.error(e)
  process.exit(1)
})
