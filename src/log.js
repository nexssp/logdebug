// Get CLI attributes
const isErrorPiped = process.argv.indexOf('--debug:stdout') >= 0;
const isDebug = isErrorPiped || process.argv.indexOf('--debug') >= 0;
const isQuiet = process.argv.indexOf('--quiet') >= 0;
const { yellow, red, green, blue, bold, underscore, white } = require('@nexssp/ansi');

const nexssLog = (consoleType) => (pre) => (color = bold) => (...args) => {
  if (!isQuiet) {
    if (consoleType === 'error') {
      if (isErrorPiped) consoleType = 'log'; // Pipe erorrs to stdout (eg for testing purposes)
    }

    console[consoleType](color(`${pre} ${args.join(' ')}`)); //.map(e => color(bold(e)))
  }
};

const nexssDebug = (consoleType) => (pre) => (color = bold) => (...args) => {
  if (isDebug) {
    // always display error
    if (isErrorPiped) consoleType = 'log'; // Pipe erorrs to stdout (eg for testing purposes)
    console[consoleType](color(`${pre}  ${args.join(' ')}`));
  }
};

const dbg = (...args) => {
  if (isDebug) {
    console.log(...args);
  }
};

module.exports = {
  dbg,
  d: nexssDebug('error')('DEBUG')(), // debug normal
  dy: nexssDebug('error')('DEBUG')(yellow), // debug yellow
  dr: nexssDebug('error')('DEBUG')(red), // debug red
  dg: nexssDebug('error')('DEBUG')(green), // debug green
  db: nexssDebug('error')('DEBUG')(blue), // debug blue
  di: nexssDebug('error')('DEBUG')(bold), // debug info/bolds
  du: nexssDebug('error')('DEBUG')(underscore), // debug info/bolds
  // Log
  warn: nexssLog('error')('WARN')(yellow),
  error: nexssLog('error')('ERROR')(red),
  info: nexssLog('error')('INFO')(white),
  success: nexssLog('error')('SUCCESS')(green),
  ok: nexssLog('error')('OK')(green),
  trace: nexssLog('error')('TRACE')(green),
  header: (...args) =>
    console.log(bold(`======================== ${args.join('')} ========================`)),
  isErrorPiped,
  isDebug,
  isQuiet,
};
