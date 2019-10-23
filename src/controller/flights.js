const logger = require('../utils/logger')
const { flightService } = require('../services')

const getFlights = async (req, res) => {
  logger.info('get all flights info')
  const flights = await flightService.getAll()
  res.json(flights)
}

const bookFlight = (req, res) => {
  logger.info('booking a flight')
  res.json({ result: 'ok' })
}

module.exports = {
  getFlights,
  bookFlight
}
