const { reservation } = require('../repository')

const getByUserId = async function ({ userId }) {
  const reservationsFound = await reservation.getByUserId({ userId })
  return reservationsFound
}

module.exports = {
  getByUserId
}
