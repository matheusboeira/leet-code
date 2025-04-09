import chalk from 'chalk'

type Process = {
  message: string
  level: 'error' | 'success' | 'warning' | 'info' | 'log'
}

const error = (message: string) => console.log(chalk.red(message))
const success = (message: string) => console.log(chalk.green(message))
const warning = (message: string) => console.log(chalk.yellow(message))
const info = (message: string) => console.log(chalk.blue(message))
const log = (message: string) => console.log(chalk.white(message))
const example = (message: string) =>
  console.log(chalk.bgGray('> Resultado: '), message)

const process = (processes: Process[]) => {
  for (const process of processes) {
    switch (process.level) {
      case 'error':
        error(process.message)
        break
      case 'success':
        success(process.message)
        break
      case 'warning':
        warning(process.message)
        break
      case 'info':
        info(process.message)
        break
      case 'log':
        log(process.message)
        break
    }
  }
}

export const Logger = {
  error,
  success,
  warning,
  info,
  log,
  process,
  example
}
