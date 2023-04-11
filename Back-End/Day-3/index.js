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

  let filteredPosts = posts
  const { userId, title } = request.query//{ userId: '4', title: 'ullam ut quidem id aut vel consequuntur' }

  if (userId) { //10
    filteredPosts = filteredPosts.filter((post) => {
      return post.userId === Number(userId)
    })
  }

  if (title) { //1
    filteredPosts = filteredPosts.filter((post) => {
      return post.title == title
    })
  }

  //DB call - fetch all the posts and return
  response.send({ status: 'success', data: filteredPosts })
})

app.get('/posts/:postId', (request, response) => {
  const { postId } = request.params //{postId: '20'}

  const postIdNum = Number(postId)
  const requestedPost = posts.filter((post) => {
    return post.id === postIdNum
  })

  if (requestedPost.length == 0) {
    response.send({ status: 'error', msg: 'No posts found with requested ID!' })
  } else {
    response.send({ status: 'success', data: requestedPost[0] })
  }
})

app.delete('/posts/:postId', (request, response) => {
  const { postId } = request.params //{postId: '20'}

  const postIdNum = Number(postId)

  // posts = posts.filter((post) => {
  //   return post.id === postIdNum ? false : true
  // })

  const index = posts.findIndex((post) => {
    return post.id === postIdNum
  })

  if (index == -1) {
    response.send({ status: 'error', msg: 'Data not found!' })
  } else {
    posts.splice(index, 1)
    response.send({ status: 'success', msg: 'Deleted Successfully' })
  }
})

app.listen(8000, () => {
  console.log("Server started Sucessfully")
})

//Http Verbs/Methods
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
