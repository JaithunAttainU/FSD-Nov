const userValidation = (request, response, next) => {
  const { email, password } = request.body
  console.log("User Validation Middleware executed")
  if (email && password) {
    next()
  } else {
    response.status(400).send({ status: 'error', msg: 'Invalid Input! Email/Password is missing!' })
  }
}

const postsValidation = (request, response, next) => {
  const { body, title } = request.body

  if (body && title) {
    next()
  } else {
    response.status(400).send({ status: 'error', msg: 'Invalid Input! Body/Title is missing!' })
  }
}

module.exports = {
  userValidation,
  postsValidation
}