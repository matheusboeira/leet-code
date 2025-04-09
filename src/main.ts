import fs from 'node:fs'
import path from 'node:path'
import { Logger } from './utils/terminal-colors'

const folder = process.argv[2]

if (!folder) {
  Logger.process([
    {
      level: 'error',
      message: 'X Missing folder argument'
    },
    {
      level: 'info',
      message: "> Enter 'npm dev 1' to execute the 'two-sum' script (folder 1)"
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
    Logger.error(`X Missing *.ts file on src/${folder}`)
    process.exit(1)
  }
} catch {
  Logger.error(`X Folder not found: src/${folder}`)
  process.exit(1)
}

const filePath = path.resolve(dirPath, tsFile)

if (!fs.existsSync(filePath)) {
  Logger.error('X File not found.')
  process.exit(0)
}

Logger.success(`✅ Executing ${filePath}\n`)

import(filePath).catch((err) => {
  Logger.error(`X Error to import ${filePath}: ${JSON.stringify(err)}`)
})
