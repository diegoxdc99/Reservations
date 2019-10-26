require('../docs/typedef')
const { flight } = require('../repository')

/**
 * get all flights
 * @returns {Promise<Flight[]>} list with all flights in database
 */
const getAll = async function () {
  const flights = await flight.getAll()
  return flights
}

/**
 * Find an object of type Flight by providing a mongo id
 * @param {Object} Flight - Object flight.
 * @param {string} Flight.flightId - mongo id of flight
 * @returns {Promise<Flight>} the Flight object found with that id
 */
const getById = async ({ flightId }) => {
  return flight.getById({ flightId })
}

module.exports = {
  getAll,
  getById
}
