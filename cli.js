#!/usr/bin/env node

const { spawn } = require('child_process')
const { bin, cwd, args, isYarn, isNPM } = require('./index')

if (!isYarn && !isNPM) {
  throw new Error('Expected to be launched from either npm or yarn.')
}

if (args.length < 2) {
  throw new Error('Expected at least one argument with what script to run.')
}

const child = spawn(bin, args, { cwd, stdio: 'inherit' })

child.on('exit', code => process.exit(code))
