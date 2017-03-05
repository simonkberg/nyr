#!/usr/bin/env node

'use strict'

const spawn = require('child_process').spawn
const nyr = require('./index')

if (!nyr.isYarn && !nyr.isNPM) {
  throw new Error('Expected to be launched from either npm or yarn.')
}

if (nyr.args.length < 2) {
  throw new Error('Expected at least one argument with what script to run.')
}

const child = spawn(nyr.bin, nyr.args, { cwd: nyr.cwd, stdio: 'inherit' })

child.on('exit', code => process.exit(code))
