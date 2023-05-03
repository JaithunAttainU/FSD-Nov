const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  console.log(req.headers)
  console.log(req.cookies)

  const token = req.cookies.jwt
  if (token) {
    //Validate the token

    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.userPayload = data
      console.log(data)
      next()
    } catch (error) {
      res.status(401).send({ status: 'error', msg: 'Invalid Token!' })
    }
  } else {
    res.status(401).send({ status: 'error', msg: 'Token not prsent, Try Again!' })
  }
}

const isAdminUserMiddleware = (req, res, next) => {
  const { isAdmin } = req.userPayload

  if (isAdmin) {
    next()
  } else {
    res.status(401).send({ status: 'error', msg: 'This operation is not allowed' })
  }
}

module.exports = {
  authMiddleware,
  isAdminUserMiddleware
}