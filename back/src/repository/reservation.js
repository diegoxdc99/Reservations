const { Reservation } = require('../models/index')

const getByUserId = async function ({ userId }) {
  const query = { userId }
  return Reservation.find(query).sort([['createdAt', 'descending']]).exec()
}

const getConsolidateInfo = async function ({ userId }) {
  const query = { userId }
  return Reservation.aggregate([
    {
      $match: query
    },
    {
      $lookup: {
        from: 'users', // collection name in db
        localField: 'userId',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $lookup: {
        from: 'flights', // collection name in db
        localField: 'flightId',
        foreignField: '_id',
        as: 'flight'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $unwind: '$flight'
    }
  ])
}

const create = async (reservationFields) => {
  const reservationRecord = new Reservation(reservationFields)
  const reservationSaved = await reservationRecord.save()
  return reservationSaved
}

module.exports = {
  getByUserId,
  create,
  getConsolidateInfo
}
