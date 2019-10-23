const logger = require('../utils/logger')
const { Flight } = require('../models/index')

const getAll = async () => {
  logger.info('getting all flights')
  return Flight.find()
}

module.exports = {
  getAll
}
