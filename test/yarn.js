const assert = require('assert')
const { bin, args, cwd, isYarn, isNPM } = require('../index')

assert(bin.endsWith('yarn.js'), `'bin' is '${bin}'`)
assert(args.indexOf('run') === 0, `'args' is '${args}'`)
assert(cwd === process.cwd(), `'cwd' is '${cwd}'`)
assert(isYarn === true, `'isYarn' is '${isYarn}'`)
assert(isNPM === false, `'isNPM' is '${isNPM}'`)
