const logger = require('../utils/logger')
const { flightService } = require('../services')

const getFlights = async (req, res, next) => {
  try {
    logger.info('get all flights info')
    const flights = await flightService.getAll()
    res.json(flights)
  } catch (error) {
    logger.error('Error trying get all flights:', error)
    next(error)
  }
}

module.exports = {
  getFlights
}
