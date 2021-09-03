const { doSomethingCommon, otherThingFromCommon } = require('@goldfish/common')

function startServer() {
  console.log('starting server...')
  doSomethingCommon()
  console.log('Server started with new code...')
  otherThingFromCommon()
}

startServer()