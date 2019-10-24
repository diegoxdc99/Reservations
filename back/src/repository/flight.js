const { Flight } = require('../models/index')

const getAll = async () => {
  return Flight.find()
}

const getById = async ({ flightId }) => {
  return Flight.findById(flightId)
}

module.exports = {
  getAll,
  getById
}
