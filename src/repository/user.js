const logger = require('../utils/logger')
const { User } = require('../models/index')

const getUser = async function ({ document }) {
  logger.log('info', 'Getting the interactions')
  const query = { document }
  return User.findOne(query)
}

module.exports = {
  getUser
}
