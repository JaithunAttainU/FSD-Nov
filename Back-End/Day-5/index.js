const express = require('express')
const app = express()
const { getAllPosts, getPostById, addPost, editPost, deletePost } = require('./controllers/postController')
const authMiddleware = require('./middlewares/authMiddleware')
const logMiddleware = require('./middlewares/logMiddleware')
const { userValidation, postsValidation } = require('./middlewares/validationMiddleware')
const { addUser } = require('./controllers/usersController')
const morgan = require('morgan')
const fs = require('fs')

const logStream = fs.createWriteStream('access.log', { flags: 'a' })
//application level middleware
// app.use(logMiddleware)
app.use(morgan('combined', { stream: logStream }))
app.use(authMiddleware)
app.use(express.json())
app.use(express.urlencoded())

// app.use(userValidation)
app.use(express.static('public'/*, { index: false }*/))

//Middlewares
//Morgan
//Helmet
//cors

app.get('/posts', getAllPosts)
app.get('/posts/:postId', getPostById)
app.delete('/posts/:postId', deletePost)
app.post('/posts', postsValidation, addPost)
app.put('/posts/:postId', editPost)

app.post('/users', userValidation, addUser)

app.listen(8000, () => {
  console.log("Server started Sucessfully")
})