const mongoose = require('mongoose')

const Flight = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: [true, 'origin is necessary'],
      trim: true,
      index: true
    },
    destination: {
      type: String,
      required: [true, 'destination is necessary'],
      trim: true,
      index: true
    },
    flightDate: {
      type: Date,
      required: [true, 'flightDate is necessary']
    }
  }
)

module.exports = mongoose.model('flights', Flight)
