const express = require('express')
const { reservations } = require('../../controller')
const { userMiddleware } = require('../middleware')

const route = express.Router()

module.exports = (app) => {
  app.use('/reservations', route)

  route.get('/:id', reservations.getuserReservations)
  route.post('/', userMiddleware.canBook, reservations.create)
}
