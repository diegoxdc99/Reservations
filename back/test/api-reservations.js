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
  reservationRepo.getByUserId.withArgs({ userId: fixturesUser.single._id }).returns(Promise.resolve(fixturesReservation.all))
  reservationRepo.getByUserId.withArgs({ userId: fixturesUser.singleWidthDateToday._id }).returns(Promise.resolve(fixturesReservation.allWidthReservationToday))

  reservationRepo.create = sandbox.stub()
  reservationRepo.create.withArgs(fixturesReservation.fields).returns(Promise.resolve(fixturesReservation.single))

  userRepo.getUser = sandbox.stub()
  userRepo.getUser.withArgs({ document: fixturesUser.single.document }).returns(Promise.resolve(fixturesUser.single))
  userRepo.getUser.withArgs({ document: fixturesUser.singleWidthDateToday.document }).returns(Promise.resolve(fixturesUser.singleWidthDateToday))

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

  const middlewareUser = proxyquire('../src/api/middleware/user', {
    '../../services': serviceIndex
  })

  const middlewareIndex = proxyquire('../src/api/middleware', {
    './user': middlewareUser
  })

  const flightRoutes = proxyquire('../src/api/routes/flights', {
    '../../controller': controllerIndex
  })
  const reservationRoutes = proxyquire('../src/api/routes/reservations', {
    '../../controller': controllerIndex,
    '../middleware': middlewareIndex
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
      t.falsy(err, 'should not return an error')
      t.deepEqual({
        flight: fixturesFlights.single,
        reservation: fixturesReservation.createResponse
      }, res.body)
      t.end()
    })
})

test.serial.cb('/reservation create a reservation - user not found', t => {
  request(server)
    .post('/reservations')
    .send({
      document: fixturesUser.documentFalse,
      flightId: fixturesFlights.single._id
    })
    .expect(500)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      t.deepEqual({ error: 'user not found' }, res.body)
      t.end()
    })
})

test.serial.cb('/reservation create a reservation - user already has a reservation', t => {
  request(server)
    .post('/reservations')
    .send({
      document: fixturesUser.singleWidthDateToday.document,
      flightId: fixturesFlights.single._id
    })
    .expect(500)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      t.deepEqual({ error: 'the user already has a reservation' }, res.body)
      t.end()
    })
})

test.serial.cb('/reservation create a reservation - flight not found', t => {
  request(server)
    .post('/reservations')
    .send({
      document: fixturesUser.single.document,
      flightId: fixturesFlights.flightFalse
    })
    .expect(500)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      t.deepEqual({ error: 'Flight not found' }, res.body)
      t.end()
    })
})

test.afterEach(async => {
  sandbox && sinon.restore()
})
