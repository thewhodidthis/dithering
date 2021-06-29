import { assert, report } from "tapeless"
import { matrix, ordered } from "./main.js"

const { ok, equal } = assert

const filter = ordered()
const { data } = filter()

equal.test(data.length, 0)

ok
  .describe("returns lambda on init", "will default")
  .test(typeof filter, "function")

const keys = "floydSteinberg bayer64".split(" ")

for (const k of keys) {
  ok.test(k in matrix)
}

const source = { data: Uint8ClampedArray.from([1, 2, 3, 4]), width: 1 }
const result = filter(source)

equal
  .describe("input/output size is a match", "will operate")
  .test(result.data.length, source.data.length)

report()
