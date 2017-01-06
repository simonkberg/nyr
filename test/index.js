const { spawn } = require('child_process')
const { assign } = Object
const options = {
  cwd: process.cwd(),
  stdio: 'inherit',
}

const run = name => new Promise((resolve, reject) => {
  const args = ['run', `test:${name}`]
  const opts = assign({}, options, {
    env: assign({}, process.env, {
      _: name,
    }),
  })
  const child = spawn(name, args, opts)

  child.on('error', err => reject(err))
  child.on('exit', code =>
    code === 0 ? resolve(code) : reject(code)
  )
})

const tests = [
  run('npm'),
  run('yarn'),
]

Promise.all(tests)
  .then(_ => process.exit(0))
  .catch(_ => process.exit(1))
