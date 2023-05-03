const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
  // roles: {
  //   type: [String],
  //   enum: ['Students', 'Instructors']
  // }
})

const UserModel = model('users', userSchema)
module.exports = UserModel