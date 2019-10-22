const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'develop'

const envFound = dotenv.config()
if (!envFound) {
  console.log('File .env does not exist')
}

module.exports = {
  port: process.env.PORT || 3000,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
  db: {
    url: process.env.DB_URL
  }
}
