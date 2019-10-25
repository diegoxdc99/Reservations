const { reservation } = require('../repository')

const getByUserId = async function ({ userId }) {
  const reservationsFound = await reservation.getByUserId({ userId })
  return reservationsFound
}

const getConsolidateInfo = async function ({ userId }) {
  const reservationsFound = await reservation.getConsolidateInfo({ userId })
  return reservationsFound
}

const create = async (user, flight) => {
  const reservationFields = {
    userId: user._id,
    flightId: flight._id,
    cost: flight.price
  }
  const newReservation = await reservation.create(reservationFields)
  return newReservation
}

module.exports = {
  getByUserId,
  create,
  getConsolidateInfo
}
