const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ['USER', 'ADMIN'],
      message: '{VALUE} not supported'
    },
    default: 'USER'
  }
})

module.exports = mongoose.model('User', UserSchema)
