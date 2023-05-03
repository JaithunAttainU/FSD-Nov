const UserModel = require("../models/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = async (request, response) => {
  const { name, email, password } = request.body

  try {

    //Hash the password and then store in DB
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = await UserModel.create({ name, email, password: hashedPassword })
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

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        response.status(401).send({ status: 'error', msg: 'Invalid Password' });
      }

      //Generate the token here
      console.log(user)
      const userPayload = { email: user.email, name: user.name, isAdmin: user.isAdmin }
      const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })

      //body //Headers
      console.log(token)
      response.cookie('jwt', token)
      response.send({ status: 'success', msg: 'User Logged in successfully' })
    }
  } catch (error) {
    response.send({ status: 'error', msg: 'Error logging In!' })
  }
}

const logout = () => {

}

module.exports = {
  signup,
  login,
  logout
}