const UserModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const signup = async (request, response) => {
  const { name, email, password } = request.body

  try {
    const newUser = await UserModel.create({ name, email, password })
    response.send({ status: 'success', user: { name: newUser.name, email: newUser.email, id: newUser._id } })
  } catch (error) {
    response.status(500).send({ status: 'error', msg: 'Error adding user to DB' })
  }
}

const login = async (request, response) => {
  const { email, password } = request.body

  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      response.status(404).send({ status: 'error', msg: 'User Not Found' });
    } else {
      if (user.password !== password) {
        response.status(401).send({ status: 'error', msg: 'Invalid Password' });
      }

      //Generate the token here
      const userPayload = { email: user.email, name: user.name }
      const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })

      //body //Headers
      console.log(token)
      response.cookie('jwt', token)
      response.send({ status: 'success', msg: 'User Logged in successfully' })
    }
  } catch (error) {

  }
}

const logout = () => {

}

module.exports = {
  signup,
  login,
  logout
}