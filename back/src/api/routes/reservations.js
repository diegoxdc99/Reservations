const express = require('express')
const { reservations } = require('../../controller')
const { userMiddleware } = require('../middleware')

const route = express.Router()

module.exports = (app) => {
  app.use('/reservations', route)

  route.get('/:id', userMiddleware.getUserByDocument, reservations.getuserReservations)
  route.post('/',
    userMiddleware.getUserByDocument,
    userMiddleware.canBook,
    userMiddleware.haveReservationToday,
    userMiddleware.getFlightById,
    reservations.create
  )
}
