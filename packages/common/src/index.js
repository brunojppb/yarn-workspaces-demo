function doSomethingCommon() {
  console.log('Doing something common that is different...')
}

function otherThingFromCommon() {
  console.log('other thing from common...')
}

module.exports = {
  doSomethingCommon,
  otherThingFromCommon
}