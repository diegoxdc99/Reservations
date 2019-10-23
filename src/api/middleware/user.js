const { userService } = require('../../services')
const legalAge = 18

const canBook = async (req, res, next) => {
  const user = await userService.getUser({ document: req.body.document })
  if (!user) return next(new Error('user not found'))

  req.body.user = user
  user.age >= legalAge ? next() : next(new Error('the user is a minor'))
}

module.exports = {
  canBook
}
