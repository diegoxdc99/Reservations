const logger = require('../utils/logger')
const { reservationService } = require('../services')
const jsonUtil = require('../utils/json')

const getuserReservations = async (req, res, next) => {
  try {
    const reservations = await reservationService.getByUserId({ userId: req.body.user._id })
    res.json(reservations.toJSON())
  } catch (error) {
    logger.error('Error trying get user reservation:', error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    logger.info(`Creating reservation for user: ${req.body.user.document} and flight id: ${req.body.flight._id}`)
    const reservationSaved = await reservationService.create(req.body.user, req.body.flight)
    const reservationResponse = jsonUtil.deleteProperties(reservationSaved, ['__v', 'updatedAt'])
    res.json({
      flight: req.body.flight,
      reservation: reservationResponse
    })
  } catch (error) {
    logger.error('Error trying create reservation:', error)
    next(error)
  }
}

module.exports = {
  getuserReservations,
  create
}
