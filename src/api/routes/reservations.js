const express = require('express')
const { reservations } = require('../../controller')

const route = express.Router()

module.exports = (app) => {
  app.use('/reservations', route)

  route.get('/:id', reservations.getuserReservations)
}
