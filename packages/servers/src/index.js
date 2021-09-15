const { doSomethingCommon, otherThingFromCommon } = require('@goldfish/common')

function startServer() {
  console.log('starting server...')
  doSomethingCommon()
  otherThingFromCommon()
  console.log('Another server change...')
}

startServer()