const express = require('express')
const { flights } = require('../../controller')

const route = express.Router()

module.exports = (app) => {
  app.use('/flights', route)

  route.route('/')
    .get(flights.getFlights)
    .post(flights.bookFlight)
}
