# @nexssp/logdebug

**25.06.2024 TypeScript Support** - Added TypeScript type definitions for better development experience.
**15.01.2022 Upgrade** - Now works also with `import` as module.

## News

- New **1.0.17**: tracking functions. `--debug:all` or `--debug:tracker` more below

## More

Note: **1.0.15** Now by default all logs and debug funcs goes to stdout - except error one. To move all of them to stderr: `--output:stderr`

Note: **1.0.12+**
Now **header** function is size of terminal window.

Note: **1.0.11+ See new time functions below ..**

Easy loging/debuging. Going to stderr if `--debug`. You can change from stderr to stdout easy by another option `--debug:stdout`. You can disable logs just by adding `--quiet`. Maybe you need just debug information, combine it with `--quiet --debug`.

## Debug and Log functions and colors

![Nexss Log and Debug functions](https://user-images.githubusercontent.com/53263666/117049034-f4530f00-ad13-11eb-95f1-a4d80e42ec7d.png)

## Parameters

This library is designed just to use cli process.argv directly.

- **yourprogram.js --debug** # will display debugging information, without it won't.
- **yourprogram.js --debug:stdout** # will pipe to stdout.
- **yourprogram.js --quiet** # will hide logs information

## Examples

note: below must be run with `--debug` or `--debug:stdio` . if you add `--quiet`, logs will not be displayed.

```js
const log = require('@nexssp/log')
const { bold } = require('@nexssp/ansi')
// You can display debug infor by --debug or --debug:stdout
log.dy('\t Debug yellow: ' + bold('log.dy'))
log.dr('\t Debug red: ' + bold('log.dr'))
log.dg('\t Debug green: ' + bold('log.dg'))
log.di('\t Debug bold: ' + bold('log.di'))
log.db('\t Debug blue: ' + bold('log.db'))
log.du('\t Debug underscore: ' + bold('log.du'))

// You can bellow hide by --quiet
log.warn('\t Warning message ' + bold('log.warn'))
log.error('\t error message ' + bold('log.error'))
log.info('\t info message ' + bold('log.info'))
log.success('sucess message ' + bold('log.success'))
log.ok('\t ok message ' + bold('log.ok'))
log.trace('\t trace message ' + bold('log.trace'))
```

## Time options (1.0.11+)

#### --debug:ms

displays time from the begining.

![image](https://user-images.githubusercontent.com/8799218/96580565-c60e6480-12d8-11eb-82d0-e86516016299.png)

#### --debug:diff

Displays difference between each log.

![image](https://user-images.githubusercontent.com/8799218/96580751-0b329680-12d9-11eb-888a-14c2ce2b9dc1.png)

### Usage of tracker

#### External Usage

```js
const o = {
  run, // tracker will be only added to the functions
  start,
  var1, //Will not be added, only functions
}
const { applyTracker } = require('@nexssp/logdebug/tracker')
applyTracker(o, null)
```

#### Composite

```js
const { functionTracker } = require('../tracker')
function myComposite(a, b, { option1, option2 } = {}) {
  const _a = a
  const _b = b

  const trackFunction = functionTracker('mytitle')

  let myfunc2 = (param2) => {
    console.log(`${_b}`, param2)
  }

  let myfunc1 = (param1) => {
    console.log(`${_a}: ${param1}`)
    myfunc2(`${_a}: ${param1}`, 'works!')
  }

  myfunc1 = trackFunction(myfunc1)
  myfunc2 = trackFunction(myfunc2)

  let o = {
    myfunc1,
    myfunc2,
  }
  // applyTracker(o)

  return o
}

const compo = myComposite(1, 'string')
compo.myfunc1(1, 2, 3)
compo.myfunc2(1, 2, 3)
```
