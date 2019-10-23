// const { reservationService } = require('../services')

const getuserReservations = async (req, res) => {
  res.json({ reservations: [] })
}

const create = (req, res) => {
  res.json({ message: 'ok' })
}

module.exports = {
  getuserReservations,
  create
}
