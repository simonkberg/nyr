# nyr (npm-yarn-run) [![Travis][build-badge]][build-link] [![npm package][npm-badge]][npm-link]

A tiny helper that knows if you are running a script via [npm] or [Yarn],
to let you chain your commands for either.

Use as a replacement for `x run` in your package scripts.

```sh
$ yarn add nyr
$ npm install --save nyr
```

## Example
The intention is for this to be used as a CLI in your `package.json`:
```json
{
  "name": "example-project",
  "main": "index.js",
  "scripts": {
    "lint:eslint": "eslint",
    "lint:stylelint": "stylelint",
    "lint": "nyr lint:eslint && nyr lint:stylelint"
  }
}
```

Now if you run `npm run lint` or `yarn lint`, then `lint:eslint` and
`lint:stylelint` will be executed with `npm run x` or `yarn run x` depending
on whichever you called the script with.

> **Note:** `run` is implied before all arguments. Yarn is clever and will
check for user-defined script if you run an unrecognized command, but npm
only works like that with a handful of pre-defined script names (for good
reasons, as this avoids conflicts). For compatibility reasons, _all_ commands
will be executed with `run` (prepended if not manually provided) for _both_
npm and Yarn.

## Node API
You can use this package as a node module as well:
```js
const {
  bin,    // (String)  path to executed binary (yarn or npm)
  args,   // (Array)   arguments passed to the script (with "run" first)
  cwd,    // (String)  where the script was executed from
  isYarn, // (Boolean) if it was executed with Yarn
  isNPM,  // (Boolean) if it was executed with npm
} = require('nyr')
```
This would probably only be useful if it's a script you intend to call from
your scripts in `package.json`, as calling it directly with `node` wouldn't
provide much useful information (and `args` would likely be off).

## Why?
I like Yarn, and I wish everyone would use it. But I also don't want to make
any assumptions about what tool people are running yet, so I'd like to keep
my scripts in `package.json` compatible with both, while still having them
neat and tidy.

There's actually already a similar tool (which I've been using) available
called [yarn-or-npm] (`yon`). However, it relies on checking if Yarn is
available on your system, and not which tool you're actually using.

I also needed a tool which correctly pipes all i/o and returns the correct
exit codes, so tests and CI pass or fail as expected.

It does however cover more use-cases, so I'd recommend checking it out if
you need something more extensive!

## License

[MIT] © 2017 [Simon Kjellberg]

[build-badge]: https://img.shields.io/travis/simonkberg/nyr/master.svg?style=flat-square
[build-link]: https://travis-ci.org/simonkberg/nyr
[npm-badge]: https://img.shields.io/npm/v/nyr.svg?style=flat-square
[npm-link]: https://www.npmjs.org/package/nyr
[npm]: https://docs.npmjs.com/cli/npm
[Yarn]: https://yarnpkg.com/
[yarn-or-npm]: https://www.npmjs.com/package/yarn-or-npm
[MIT]: ./License
[Simon Kjellberg]: mailto:simon.kjellberg@gmail.com
