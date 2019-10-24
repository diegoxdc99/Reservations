const test = require('ava')
const request = require('supertest')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const fixturesFlights = require('./fixtures/flights')
const fixturesReservation = require('./fixtures/reservations')
const fixturesUser = require('./fixtures/user')

let sandbox = null
let server = null

const flightRepo = {}
const reservationRepo = {}
const userRepo = {}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()
  flightRepo.getAll = sandbox.stub()
  flightRepo.getAll.returns(Promise.resolve(fixturesFlights.all))

  flightRepo.getById = sandbox.stub()
  flightRepo.getById.withArgs({ flightId: fixturesFlights.single._id }).returns(Promise.resolve(fixturesFlights.single))

  reservationRepo.getByUserId = sandbox.stub()
  reservationRepo.getByUserId.withArgs(fixturesReservation.single._id).returns(Promise.resolve(fixturesReservation.single))

  reservationRepo.create = sandbox.stub()

  userRepo.getUser = sandbox.stub()

  const RepositoryIndex = proxyquire('../src/repository', {
    './flight': flightRepo,
    './reservation': reservationRepo,
    './user': userRepo
  })

  const flightService = proxyquire('../src/services/flight', {
    '../repository': RepositoryIndex
  })
  const userService = proxyquire('../src/services/user', {
    '../repository': RepositoryIndex
  })
  const reservationService = proxyquire('../src/services/reservation', {
    '../repository': RepositoryIndex
  })

  const serviceIndex = proxyquire('../src/services', {
    './flight': flightService,
    './reservation': reservationService,
    './user': userService
  })

  const flightController = proxyquire('../src/controller/flights', {
    '../services': serviceIndex
  })
  const reservationController = proxyquire('../src/controller/reservations', {
    '../services': serviceIndex
  })

  const controllerIndex = proxyquire('../src/controller', {
    './flights': flightController,
    './reservations': reservationController
  })

  const flightRoutes = proxyquire('../src/api/routes/flights', {
    '../../controller': controllerIndex
  })
  const reservationRoutes = proxyquire('../src/api/routes/reservations', {
    '../../controller': controllerIndex
  })

  const flightRoutesIndex = proxyquire('../src/api', {
    './routes/flights': flightRoutes,
    './routes/reservations': reservationRoutes
  })

  const loaderExpress = proxyquire('../src/loaders/express', {
    '../api': flightRoutesIndex
  })

  const loaderIndex = proxyquire('../src/loaders', {
    './express': loaderExpress
  })

  server = proxyquire('../src/app', {
    './loaders': loaderIndex
  })
})

test.serial.cb('/reservation create a reservation', t => {
  request(server)
    .post('/reservations')
    .send({
      document: fixturesUser.single.document,
      flightId: fixturesFlights.single._id
    })
    .expect(200)
    .end((err, res) => {
      console.log('res.body :', res.body);
      console.log('err :', err);
      t.falsy(err, 'should not return an error')
      t.end()
    })
})

test.afterEach(async => {
  sandbox && sinon.restore()
})
