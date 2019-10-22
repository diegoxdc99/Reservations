const express = require('express')
const reservations = require('./routes/reservations')

module.exports = () => {
  const app = express.Router()
  reservations(app)
  return app
}
