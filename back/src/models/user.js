const mongoose = require('mongoose')

const User = new mongoose.Schema(
  {
    document: {
      type: String,
      required: [true, 'document is necessary'],
      trim: true,
      index: true
    },
    age: {
      type: Number,
      required: [true, 'age is index: true,']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)


/**
 * It represents a User
 * @typedef {Object} User
 * @property {ObjectId} _id mongo id
 * @property {string} document document id of user
 * @property {number} age age of user
 */