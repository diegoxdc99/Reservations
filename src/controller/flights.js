// const flights = require('../services/flights')

const getFlights = (req, res) => {
  res.json({ flights: [] })
}

const bookFlight = (req, res) => {
  res.json({ result: 'ok' })
}

module.exports = {
  getFlights,
  bookFlight
}
