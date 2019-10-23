const mongoose = require('mongoose')
const limitMorningTime = 12
const percentageMorningTime = 0.1
const percentageWeekends = 0.2

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

Reservation.pre('save', function calculateExtraCost (next) {
  var date = new Date()

  const morningCost = isAfternoon(date) ? this.cost * percentageMorningTime : 0
  const weekendCost = isWeekend(date) ? this.cost * percentageWeekends : 0
  this.extraCost = morningCost + weekendCost
  next()
})

const isAfternoon = (date) => {
  const hours = date.getHours()
  return hours >= limitMorningTime
}

const isWeekend = (date) => {
  return !(date.getDay() % 6)
}

module.exports = mongoose.model('reservations', Reservation)
