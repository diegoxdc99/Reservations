const logger = require('../utils/logger')
const { user } = require('../repository')

const getUser = async function ({ document }) {
  logger.log('info', 'Getting the interactions')
  const userFound = await user.getUser({ document })
  return userFound
}

module.exports = {
  getUser
}
