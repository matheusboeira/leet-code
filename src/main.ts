import fs from 'node:fs'
import path from 'node:path'
import { Logger } from './utils/terminal-colors'

const folder = process.argv[2]

if (!folder) {
  Logger.process([
    {
      level: 'error',
      message: 'X Nenhum argumento enviado.'
    },
    {
      level: 'info',
      message:
        "> Envie 'npm dev 1' para executar o 'two-sum' que consta na pasta '1'."
    }
  ])
  process.exit(0)
}

let tsFile: string | undefined
const dirPath = path.resolve(__dirname, folder)

try {
  const files = fs.readdirSync(dirPath)
  tsFile = files.find((file) => file.endsWith('.ts'))

  if (!tsFile) {
    Logger.error(`X Nenhum arquivo *.ts encontrado em src/${folder}`)
    process.exit(1)
  }
} catch {
  Logger.error(`X Pasta não encontrada: src/${folder}`)
  process.exit(1)
}

const filePath = path.resolve(dirPath, tsFile)

if (!fs.existsSync(filePath)) {
  Logger.error('X Arquivo não encontrado.')
  process.exit(0)
}

Logger.success(`✅ Executando ${filePath}\n`)

import(filePath).catch((err) => {
  Logger.error(`X Erro ao importar o arquivo: ${JSON.stringify(err)}`)
})
