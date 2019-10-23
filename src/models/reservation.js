const mongoose = require('mongoose')

const Reservation = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'userId is necessary'],
      index: true
    },
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'flightId is necessary']
    },
    cost: {
      type: Number,
      required: [true, 'cost is necessary']
    },
    extraCost: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('reservations', Reservation)
