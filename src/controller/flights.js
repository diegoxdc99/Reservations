const logger = require('../utils/logger')
// const flights = require('../services/flights')

const getFlights = (req, res) => {
  logger.info('get all flights info')
  res.json({ flights: [] })
}

const bookFlight = (req, res) => {
  logger.info('booking a flight')
  res.json({ result: 'ok' })
}

module.exports = {
  getFlights,
  bookFlight
}
