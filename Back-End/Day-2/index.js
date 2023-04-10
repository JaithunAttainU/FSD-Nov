//npm init - To create a new project - create package.json with all the basic metainfo about the project
//npm i packagename - Install the package from npm and also add it to the list of dependcies in package.json
//npm i - install all packages in package.json

const express = require('express')
const posts = require('./mock/posts')
const app = express()

//.methodName('pathname', function to handle that path)
//function to handle homepage
app.get('/', (_request, response) => {
  console.log("HomePage Request")
  // response.send("Hello World")
  response.sendFile('/Users/jmahirakz/FSD-Nov/Back-End/Day-2/view/index.html')
})

app.get('/posts', (request, response) => {
  console.log("Posts Get called triggered")
  response.send(posts)
})

app.listen(8000, () => {
  console.log("Server started Sucessfully")
})

//Http Verbs
// GET
// POST 
// PUT 
// DELETE


// Products - Get all the products - GET
// Get a particular resource alone - one product - GET
// Add a product - POST
// Delete a product - DELETE
// Edit the product - PUT

// //CRUD - Create Read Update Delete


// Facebook
// Post - ReSource
