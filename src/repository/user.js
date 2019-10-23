const { User } = require('../models/index')

const getUser = async function ({ document }) {
  const query = { document }
  return User.findOne(query)
}

module.exports = {
  getUser
}
