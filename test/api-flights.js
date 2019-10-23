const test = require('ava')
const request = require('supertest')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const fixtures = require('./fixtures/flights')

let sandbox = null
let server = null

let flightRepo = {}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()
  flightRepo.getAll = sandbox.stub()
  flightRepo.getAll.returns(Promise.resolve(fixtures.all))

  flightRepo.getById = sandbox.stub()

  const flightService = proxyquire('../src/repository', {
    './flight': flightRepo
  })

  const flightController = proxyquire('../src/services', {
    './flight': flightService
  })

  const api = proxyquire('../src/api', {
    './routes/flights': flightController
  })

  const expressLoader = proxyquire('../src/loaders/express', {
    '../api': api
  })

  const loaders = proxyquire('../src/loaders', {
    './express': expressLoader
  })

  const server = proxyquire('../src/app', {
    './loaders': loaders
  })
})

test.afterEach(async => {
  sandbox && sinon.restore()
})

test.serial.cb('/flights get all flights', t => {
  request(server)
    .get('/flights')
    .expect(200)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      t.end()
    })
})
