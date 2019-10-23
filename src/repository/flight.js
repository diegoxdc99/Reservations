const logger = require('../utils/logger')
const { Flight } = require('../models/index')

const getAll = async () => {
  logger.info('getting all flights')
  return Flight.find()
}

const getById = async ({ flightId }) => {
  return Flight.findById(flightId)
}

module.exports = {
  getAll,
  getById
}
