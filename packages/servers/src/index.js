const { doSomethingCommon, otherThingFromCommon } = require('@goldfish/common')

function startServer() {
  console.log('starting server...')
  doSomethingCommon()
  otherThingFromCommon()
  console.log('Server started with new code for new release...')
}

startServer()