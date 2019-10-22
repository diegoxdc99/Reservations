const express = require('express')
const { port } = require('./config')

async function startServer () {
  const app = express()

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

startServer()
