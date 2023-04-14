const users = []

const addUser = (request, response) => {
  const newUserData = request.body
  if (newUserData) {
    users.push(newUserData)
    response.send({ status: 'success', msg: 'User added successfully', data: newUserData })
  } else {
    response.status(400).send({ status: 'error', msg: 'Invalid Input' })
  }
}

module.exports = {
  addUser
}