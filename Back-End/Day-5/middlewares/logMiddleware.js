const logMiddleware = (request, response, next) => {
  console.log("Path", request.url)
  console.log("Time", new Date())
  console.log("Method", request.method)
  next()
}

module.exports = logMiddleware