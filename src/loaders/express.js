const bodyParser = require('body-parser')
const helmet = require('helmet')
const routes = require('../api')

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: err.message })
}

module.exports = async (app) => {
  app.use(helmet())
  app.use(bodyParser.json())

  app.get('/status', (req, res) => {
    res.status(200).end()
  })

  app.use('/', routes())
  app.use(errorHandler)
}
