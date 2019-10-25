const logger = require('../../utils/logger')
const { userService, reservationService, flightService } = require('../../services')
const legalAge = 18
const timeLimit = 1000 * 60 * 60 * 24 * 1

const canBook = async (req, res, next) => {
  logger.info('validate if user can to book')
  req.body.user.age >= legalAge ? next() : next(new Error('the user is a minor'))
}

const getUserByDocument = async (req, res, next) => {
  logger.info('getting user with document', req.body.document || req.params.id)
  const user = await userService.getUser({ document: req.body.document || req.params.id })
  if (!user) return next(new Error('user not found'))

  req.body.user = user
  next()
}

const haveReservationToday = async (req, res, next) => {
  logger.info('validating if user have a reservation today')
  const reservations = await reservationService.getByUserId({ userId: req.body.user._id })
  const date = new Date()
  if (reservations.length === 0) return next()

  if (date - reservations[0].createdAt > timeLimit) next()
  else next(new Error('the user already has a reservation'))
}

const getFlightById = async (req, res, next) => {
  logger.info('getting fly by id')
  const flight = await flightService.getById({ flightId: req.body.flightId })
  if (!flight) return next(new Error('Flight not found'))

  req.body.flight = flight
  next()
}

module.exports = {
  canBook,
  getUserByDocument,
  haveReservationToday,
  getFlightById
}
