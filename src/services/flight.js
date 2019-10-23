const { flight } = require('../repository')

const getAll = async function () {
  const flights = await flight.getAll()
  return flights
}

module.exports = {
  getAll
}
