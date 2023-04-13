const authMiddleware = (request, response, next) => {
  console.log("AuthMiddleware executed")

  //DB call to validate
  const isValid = true;

  if (isValid) {
    //Call the next middleware in line
    next()
  } else {
    response.status(401).send({ status: 'error', msg: 'Invalid User! Login with correct credentials' })
  }

}

module.exports = authMiddleware