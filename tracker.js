const { nexssLog } = require('./')
const { bold, blueBG2, white } = require('@nexssp/ansi')
const { inspect } = require('util')

const dc = nexssLog('log')('o TRCKR')(blueBG2)

const _inspect = (...params) =>
  inspect(...params, { compact: true, depth: 5 /*breakLength: 80*/ }).replace(/\r?\n/g, '')

const functionTracker = (title) => (f) => {
  return new Proxy(f, {
    apply: function (target, thisArg, argumentsList) {
      dc(
        blueBG2(white(':')) +
          ` ${title}#${bold(
            target.name || (this.constructor && this.constructor.name)
          )} @${_inspect(argumentsList)}`
      )
      // console.time(yellow(magentaBG(' f:starts ')))
      const result = target.apply(thisArg, argumentsList)
      // console.timeEnd(yellow(magentaBG(' f:starts ')))
      return result
    },
  })
}

const getSegments = (path, no = 1) => {
  return (
    (path &&
      path.split &&
      path
        .split(/[\\/]/)
        .slice(no * -1)
        .join('/')) ||
    ''
  )
}

const applyTracker = (o, title, { enable } = {}) => {
  if (
    !enable &&
    !~process.argv.indexOf('--debug:all') &&
    !~process.argv.indexOf('--debug:tracker')
  ) {
    return o
  }
  if (!title) {
    title = _getCallerFile()
  }

  const trackFunction = functionTracker(getSegments(title))

  Object.getOwnPropertyNames(o).forEach((name) => {
    if (typeof o[name] === 'function') {
      console.log('Tracking enabled: ' + name)
      o[name] = trackFunction(o[name])
    }
  })

  return o
}

// https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function
function _getCallerFile() {
  var originalFunc = Error.prepareStackTrace

  var callerfile
  try {
    var err = new Error()
    var currentfile

    Error.prepareStackTrace = function (err, stack) {
      return stack
    }

    currentfile = err.stack.shift().getFileName()

    while (err.stack.length) {
      callerfile = err.stack.shift().getFileName()

      if (currentfile !== callerfile) break
    }
  } catch (e) {}

  Error.prepareStackTrace = originalFunc

  return callerfile
}

module.exports = { applyTracker, functionTracker, getSegments }
