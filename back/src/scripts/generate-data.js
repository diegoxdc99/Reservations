const mongooseLoader = require('../loaders/mongoose')
const fakerator = require('fakerator')()
const { User, Flight } = require('../models')

const users = [
  {
    document: '111',
    age: 17
  },
  {
    document: '222',
    age: 19
  }
]

const flights = [
  {
    origin: fakerator.address.country(),
    destination: fakerator.address.country(),
    flightDate: fakerator.date.past(1, new Date()),
    price: fakerator.random.number(1000, 10000)
  },
  {
    origin: fakerator.address.country(),
    destination: fakerator.address.country(),
    flightDate: fakerator.date.past(1, new Date()),
    price: fakerator.random.number(1000, 10000)
  },
  {
    origin: fakerator.address.country(),
    destination: fakerator.address.country(),
    flightDate: fakerator.date.past(1, new Date()),
    price: fakerator.random.number(1000, 10000)
  },
  {
    origin: fakerator.address.country(),
    destination: fakerator.address.country(),
    flightDate: fakerator.date.past(1, new Date()),
    price: fakerator.random.number(1000, 10000)
  }
]

const generateData = async () => {
  await mongooseLoader()
  await insertUsers()
  await insertFlights()
  console.log('Finished')
  process.exit(0)
}

const insertUsers = async () => {
  const usersDB = await User.insertMany(users)
  return usersDB
}

const insertFlights = async () => {
  const flightsDB = await Flight.insertMany(flights)
  return flightsDB
}

generateData()
