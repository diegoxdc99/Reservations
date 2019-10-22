const expressLoader = require('./express')
const mongooseLoader = require('./mongoose')

module.exports = async (app) => {
  await expressLoader(app)
  await mongooseLoader()
}
