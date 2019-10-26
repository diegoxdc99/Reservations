require('../docs/typedef')
const logger = require('../utils/logger')
const { user } = require('../repository')

/**
 * Find an object of type User by providing a document id user
 * @param {Object} User - Object user.
 * @param {string} User.document - document id of user.
 * @returns {Promise<User>} the Flight object found with that id
 */
const getUser = async function ({ document }) {
  logger.log('info', `Getting the user information with document ${document}`)
  const userFound = await user.getUser({ document })
  return userFound
}

module.exports = {
  getUser
}
