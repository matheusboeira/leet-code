import { Logger } from './terminal-colors'
import { isEqual } from 'lodash'

type Result = {
  result: unknown
  expected: unknown
}

type ProcessResult = {
  tests: ReadonlyArray<Result>
}

const isCorrect = (result: unknown, expected: unknown, index: number) => {
  if (isEqual(result, expected)) {
    Logger.success(`[${index}] ✓ Test passed.`)
    return
  }

  Logger.error(
    `[${index}] X Incorrect result. ${JSON.stringify({
      result,
      expected
    })}`
  )
}

const process = ({ tests }: ProcessResult) => {
  if (!tests.length) {
    Logger.error('X Tests not found.')
    return
  }

  for (let i = 0; i < tests.length; i++) {
    isCorrect(tests[i].result, tests[i].expected, i)
  }
}

export const Result = {
  process
}
