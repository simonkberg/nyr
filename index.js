const {
  env: { _: bin, DEBUG },
  argv,
  cwd,
} = process

const args = argv.slice(2)

if (args[0] !== 'run') {
  args.unshift('run')
}

module.exports = {
  bin,
  args,
  cwd: cwd(),
  isYarn: bin.endsWith('yarn'),
  isNPM: bin.endsWith('npm'),
}

if (DEBUG === 'nyr') {
  const { inspect } = require('util')
  const colors = process.stdout.isTTY
  console.log(
    '-- nyr DEBUG START --\n%s\n-- nyr DEBUG END --',
    inspect(module.exports, { colors })
  )
}
