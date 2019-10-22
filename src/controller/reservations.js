// const reservations = require('../services/reservations')

const getuserReservations = (req, res) => {
  res.json({ reservations: [] })
}

module.exports = {
  getuserReservations
}
