// Get CLI attributes
let NEXSS_START_TIME = process.hrtime()
const isErrorPiped =
  process.argv.indexOf('--debug:stdout') >= 0 || process.argv.indexOf('--nxsPipeErrors') >= 0
const isDebug =
  ~process.argv.indexOf('--debug') ||
  ~process.argv.indexOf('--debug:all') ||
  ~process.argv.indexOf('--debug:diff') ||
  ~process.argv.indexOf('--debug:ms')
const isQuiet = ~process.argv.indexOf('--quiet')
const isTime = ~process.argv.indexOf('--debug:ms')
const isTimeDiff = ~process.argv.indexOf('--debug:diff')
const { pad } = require('@nexssp/extend/string')
let defaultConsoleType = process.argv.indexOf('--output:stderr') >= 0 ? 'error' : 'log'
const {
  yellow,
  red,
  green,
  blue,
  bold,
  underscore,
  white,
  magenta,
  cyan,
  grey,
} = require('@nexssp/ansi')
const { inspect } = require('util')

let f = timestamp
if (isTime || isTimeDiff) {
  f = msTime
}
const nexssLog =
  (consoleType) =>
  (pre) =>
  (color = bold) =>
  (...args) => {
    if (!isQuiet) {
      if (consoleType === 'error' && isErrorPiped) {
        consoleType = 'log' // Pipe errors to stdout (eg for testing purposes)
      }

      console[consoleType](
        color(`${f()} ${pre}`),
        ...args.map((e) => (typeof e === 'object' ? color(`${inspect(e)}`) : color(`${e}`)))
      ) //.map(e => color(bold(e)))
    }
  }

const nexssDebug =
  (consoleType) =>
  (pre) =>
  (color = bold) =>
  (...args) => {
    if (isDebug) {
      console[consoleType](
        color(`${f()} ${pre}`),
        ...args.map((e) => (typeof e === 'object' ? color(`${inspect(e)}`) : color(`${e}`)))
      )
    }
  }

const dbg = (...args) => {
  if (isDebug) {
    console.log(...args)
  }
}

module.exports = {
  defaultConsoleType,
  dbg,
  d: nexssDebug(defaultConsoleType)('|')(), // debug normal
  dy: nexssDebug(defaultConsoleType)('|')(yellow), // debug yellow
  dr: nexssDebug(defaultConsoleType)('|')(red), // debug red
  dg: nexssDebug(defaultConsoleType)('|')(green), // debug green
  dc: nexssDebug(defaultConsoleType)('|')(cyan), // debug green
  dm: nexssDebug(defaultConsoleType)('|')(magenta), // debug green
  db: nexssDebug(defaultConsoleType)('|')(blue), // debug blue
  di: nexssDebug(defaultConsoleType)('|')(bold), // debug info/bolds
  du: nexssDebug(defaultConsoleType)('|')(underscore), // debug info/bolds
  // Log
  warn: nexssLog(defaultConsoleType)('⁉ WARN')(yellow),
  error: nexssLog('error')('× ERROR')(red),
  info: nexssLog(defaultConsoleType)('¡ INFO')(white),
  success: nexssLog(defaultConsoleType)('√ SUCCESS')(magenta),
  important: nexssLog(defaultConsoleType)('! IMPORTANT')(cyan),
  ok: nexssLog(defaultConsoleType)('√ OK')(green),
  trace: nexssLog(defaultConsoleType)('∇ TRACE')(grey),
  header: (...args) => {
    const content = args.join('')
    const columns = process.stdout.columns || 80 // FIXME: in some cases can be undefined.
    // console.log(bold(`======================== ${args.join('')} ========================`));
    console.log(bold(pad(content, columns, '=')))
  },
  isErrorPiped,
  isDebug,
  isQuiet,
  nexssLog,
}

function msTime() {
  const diff = process.hrtime(NEXSS_START_TIME)
  let result = ''
  if (diff[0] > 0) {
    result += `${diff[0]} s `
  }

  result += `${diff[1] / 1000000} ms`
  if (isTimeDiff) {
    NEXSS_START_TIME = process.hrtime()
  }
  return result
}

// Below functions is borrowed from NodeJS sources. As there is util.log function depracated
// we use it here

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function timestamp() {
  const d = new Date()
  const time = [pad0(d.getHours()), pad0(d.getMinutes()), pad0(d.getSeconds())].join(':')
  return [d.getDate(), months[d.getMonth()], time].join(' ')
}

function pad0(n) {
  return n.toString().padStart(2, '0')
}
