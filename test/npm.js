const assert = require('assert')
const nyr = require('../index')

assert(nyr.bin.endsWith('npm-cli.js'), `'bin' is '${nyr.bin}'`)
assert(nyr.args.indexOf('run') === 0, `'args' is '${nyr.args}'`)
assert(nyr.cwd === process.cwd(), `'cwd' is '${nyr.cwd}'`)
assert(nyr.isYarn === false, `'isYarn' is '${nyr.isYarn}'`)
assert(nyr.isNPM === true, `'isNPM' is '${nyr.isNPM}'`)
