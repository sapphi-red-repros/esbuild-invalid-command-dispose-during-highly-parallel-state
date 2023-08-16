import fs from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'

while (true) {
  await fs.appendFile('.env', '\n', 'utf8')
  await setTimeout(200)
}
