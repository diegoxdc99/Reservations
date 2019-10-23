const { userService, reservationService } = require('../../services')
const legalAge = 18
const timeLimit = 1000 * 60 * 60 * 24 * 1

const canBook = async (req, res, next) => {
  req.body.user.age >= legalAge ? next() : next(new Error('the user is a minor'))
}

const getUserByDocument = async (req, res, next) => {
  const user = await userService.getUser({ document: req.body.document })
  if (!user) return next(new Error('user not found'))

  req.body.user = user
  next()
}

const haveReservationToday = async (req, res, next) => {
  const reservations = await reservationService.getByUserId({ userId: req.body.user._id })
  const date = new Date()
  if (reservations.lenght === 0) return next()

  if (date - reservations[0].createdAt > timeLimit) next()
  else next(new Error('the user already has a reservation'))
}

module.exports = {
  canBook,
  getUserByDocument,
  haveReservationToday
}
