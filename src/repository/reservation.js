const { Reservation } = require('../models/index')

const getByUserId = async function ({ userId }) {
  const query = { userId }
  return Reservation.find(query).sort([['createdAt', 'descending']]).exec()
}

module.exports = {
  getByUserId
}
