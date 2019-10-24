const all = [
  {
    _id: '5dafafb387803fbf16cc0db9',
    userId: '5dafaad987803fbf16caa495',
    flightId: '5db05f9b8c86e54f5af23a9d',
    cost: 500000,
    extraCost: 0,
    createdAt: new Date('2019-10-21T21:00:00.000Z')
  }
]

const allWidthReservationToday = [
  {
    _id: '5dafafb387803fbf16cc0db9',
    userId: '5dafaad987803fbf16caa496',
    flightId: '5db05f9b8c86e54f5af23a9d',
    cost: 500000,
    extraCost: 0,
    createdAt: new Date()
  }
]

const fields = {
  userId: '5dafaad987803fbf16caa495',
  flightId: '5db05f9b8c86e54f5af23a9d',
  cost: 5000
}

const single = {
  _id: '5dafafb387803fbf16cc0db9',
  userId: '5dafaad987803fbf16caa495',
  flightId: '5db05f9b8c86e54f5af23a9d',
  cost: 500000,
  extraCost: 0,
  createdAt: new Date('2019-10-21T21:00:00.000Z')
}

const createResponse = {
  _id: '5dafafb387803fbf16cc0db9',
  userId: '5dafaad987803fbf16caa495',
  flightId: '5db05f9b8c86e54f5af23a9d',
  cost: 500000,
  extraCost: 0,
  createdAt: '2019-10-21T21:00:00.000Z'
}

module.exports = {
  all,
  single,
  fields,
  createResponse,
  allWidthReservationToday
}
