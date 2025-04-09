import { Logger } from './terminal-colors'

type ProcessResult = {
  active: number | 'all'
  callbacks: ReadonlyArray<() => void>
}

const process = ({ active, callbacks }: ProcessResult) => {
  const callback = callbacks?.[active]

  if (active === 'all') {
    for (const callback of callbacks) callback()
    return
  }

  if (!callback) {
    Logger.error('X Callback não encontrada.')
    return
  }
  return callback()
}

export const Result = {
  process
}
