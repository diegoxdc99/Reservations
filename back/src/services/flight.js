const { flight } = require('../repository')

const getAll = async function () {
  const flights = await flight.getAll()
  return flights
}

const getById = async ({ flightId }) => {
  return flight.getById({ flightId })
}

module.exports = {
  getAll,
  getById
}
