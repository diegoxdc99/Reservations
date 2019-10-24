const { Reservation } = require('../models/index')

const getByUserId = async function ({ userId }) {
  const query = { userId }
  return Reservation.find(query).sort([['createdAt', 'descending']]).exec()
}

const create = async (reservationFields) => {
  const reservationRecord = new Reservation(reservationFields)
  const reservationSaved = await reservationRecord.save()
  return reservationSaved
}

module.exports = {
  getByUserId,
  create
}
