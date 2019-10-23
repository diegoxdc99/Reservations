// const reservations = require('../services/reservations')

const getuserReservations = (req, res) => {
  res.json({ reservations: [] })
}

const create = (req, res) => {
  res.json({ message: 'ok' })
}

module.exports = {
  getuserReservations,
  create
}
