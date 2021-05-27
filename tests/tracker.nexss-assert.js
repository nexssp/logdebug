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
