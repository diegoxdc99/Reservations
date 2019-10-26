require('../docs/typedef')
const { reservation } = require('../repository')

/**
 * Find an object of type Reservation by providing a mongo id
 * @param {{userId: ObjectId}} flightId ObjectId of user
 * @returns {Promise<Reservation[]>} the Reservation object found with that id
 */
const getByUserId = async function ({ userId }) {
  const reservationsFound = await reservation.getByUserId({ userId })
  return reservationsFound
}

/**
 * Get reservations showing the flight and user objects
 * @param {Object} User - Object user.
 * @param {string} User.userId - mongo id of user
 * @returns {Promise<ReservationConsolidate>} a list of flights with objects flights and users
 */
const getConsolidateInfo = async function ({ userId }) {
  const reservationsFound = await reservation.getConsolidateInfo({ userId })
  return reservationsFound
}

/**
 * Create a reservations object in database
 * @param {User} user - Object user
 * @param {Flight} flight - Object flight
 * @returns {Promise<Reservation>} Object created
 */
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
