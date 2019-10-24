const express = require('express')
const reservations = require('./routes/reservations')
const flights = require('./routes/flights')

module.exports = () => {
  const app = express.Router()
  reservations(app)
  flights(app)
  return app
}
