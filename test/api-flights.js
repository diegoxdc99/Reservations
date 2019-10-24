const test = require('ava')
const request = require('supertest')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const fixtures = require('./fixtures/flights')

let sandbox = null
let server = null

const flightRepo = {}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()
  flightRepo.getAll = sandbox.stub()
  flightRepo.getAll.returns(Promise.resolve(fixtures.all))

  flightRepo.getById = sandbox.stub()
  flightRepo.getById.withArgs(fixtures.single._id).returns(Promise.resolve(fixtures.single))

  const flightRepositoryIndex = proxyquire('../src/repository', {
    './flight': flightRepo
  })

  const flightService = proxyquire('../src/services/flight', {
    '../repository': flightRepositoryIndex
  })

  const flightServiceIndex = proxyquire('../src/services', {
    './flight': flightService
  })

  const flightController = proxyquire('../src/controller/flights', {
    '../services': flightServiceIndex
  })

  const flightControllerIndex = proxyquire('../src/controller', {
    './flights': flightController
  })

  const flightRoutes = proxyquire('../src/api/routes/flights', {
    '../../controller': flightControllerIndex
  })

  const flightRoutesIndex = proxyquire('../src/api', {
    './routes/flights': flightRoutes
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

test.serial.cb('/flights get all flights', t => {
  request(server)
    .get('/flights')
    .expect(200)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      t.deepEqual(fixtures.all, res.body)
      t.end()
    })
})

test.serial.cb('/flights database error', t => {
  flightRepo.getAll.returns(Promise.reject(new Error('Error in database')))
  request(server)
    .get('/flights')
    .expect(500)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      t.deepEqual({ error: 'Error in database' }, res.body)
      t.end()
    })
})

test.afterEach(async => {
  sandbox && sinon.restore()
})
