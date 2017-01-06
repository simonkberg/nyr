const assert = require('assert')
const { bin, args, cwd, isYarn, isNPM } = require('../index')

assert(bin.endsWith('npm'), `'bin' is '${bin}'`)
assert(args.indexOf('run') === 0, `'args' is '${args}'`)
assert(cwd === process.cwd(), `'cwd' is '${cwd}'`)
assert(isYarn === false, `'isYarn' is '${isYarn}'`)
assert(isNPM === true, `'isNPM' is '${isNPM}'`)
