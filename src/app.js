const express = require('express')
const { port } = require('./config')
const app = express()

async function startServer () {
  await require('./loaders')(app)
  if (!module.parent) {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  }
}

startServer()
module.exports = app
