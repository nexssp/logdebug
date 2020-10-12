// Get CLI attributes
const isErrorPiped = ~process.argv.indexOf('--debug:stdout');
const isDebug = isErrorPiped || ~process.argv.indexOf('--debug');
const isQuiet = ~process.argv.indexOf('--quiet');
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
} = require('@nexssp/ansi');
const { inspect } = require('util');

const nexssLog = (consoleType) => (pre) => (color = bold) => (...args) => {
  if (!isQuiet) {
    if (consoleType === 'error') {
      if (isErrorPiped) consoleType = 'log'; // Pipe erorrs to stdout (eg for testing purposes)
    }

    console[consoleType](
      color(`${timestamp()} ${pre}`),
      ...args.map((e) => (typeof e === 'object' ? color(`${inspect(e)}`) : color(`${e}`)))
    ); //.map(e => color(bold(e)))
  }
};

const nexssDebug = (consoleType) => (pre) => (color = bold) => (...args) => {
  if (isDebug) {
    // always display error
    if (isErrorPiped) consoleType = 'log'; // Pipe erorrs to stdout (eg for testing purposes)
    console[consoleType](
      color(`${timestamp()} ${pre}`),
      ...args.map((e) => (typeof e === 'object' ? color(`${inspect(e)}`) : color(`${e}`)))
    ); //.map(e => color(bold(e)))
  }
};

const dbg = (...args) => {
  if (isDebug) {
    console.log(...args);
  }
};

module.exports = {
  dbg,
  d: nexssDebug('error')('|')(), // debug normal
  dy: nexssDebug('error')('|')(yellow), // debug yellow
  dr: nexssDebug('error')('|')(red), // debug red
  dg: nexssDebug('error')('|')(green), // debug green
  dc: nexssDebug('error')('|')(cyan), // debug green
  dm: nexssDebug('error')('|')(magenta), // debug green
  db: nexssDebug('error')('|')(blue), // debug blue
  di: nexssDebug('error')('|')(bold), // debug info/bolds
  du: nexssDebug('error')('|')(underscore), // debug info/bolds
  // Log
  warn: nexssLog('error')('⁉ WARN')(yellow),
  error: nexssLog('error')('× ERROR')(red),
  info: nexssLog('error')('¡ INFO')(white),
  success: nexssLog('error')('√ SUCCESS')(magenta),
  important: nexssLog('error')('! IMPORTANT')(cyan),
  ok: nexssLog('error')('√ OK')(green),
  trace: nexssLog('error')('∇ TRACE')(grey),
  header: (...args) =>
    console.log(bold(`======================== ${args.join('')} ========================`)),
  isErrorPiped,
  isDebug,
  isQuiet,
};

// Below functions is borrowed from NodeJS sources. As there is util.log function depracated
// we use it here
function timestamp() {
  const d = new Date();
  const time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
