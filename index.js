'use strict'

const bin = process.env.npm_execpath
const args = process.argv.slice(2)

if (args[0] !== 'run') {
  args.unshift('run')
}

module.exports = {
  bin,
  args,
  cwd: process.cwd(),
  isYarn: bin.endsWith('yarn.js'),
  isNPM: bin.endsWith('npm-cli.js'),
}

if (process.env.DEBUG === 'nyr') {
  const inspect = require('util').inspect
  const colors = process.stdout.isTTY
  console.log(
    '-- nyr DEBUG START --\n%s\n-- nyr DEBUG END --',
    inspect(module.exports, { colors })
  )
}
