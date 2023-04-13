const express = require('express')
const app = express()
const { getAllPosts, getPostById, addPost, editPost, deletePost } = require('./controllers/postController')
const authMiddleware = require('./middlewares/authMiddleware')

//application level middleware
app.use(authMiddleware)
app.use(express.json())
app.use(express.urlencoded())


app.use(express.static('public'/*, { index: false }*/))

// app.get('/', (_request, response) => {
//   console.log("HomePage Request")

//   // console.log(__dirname)
//   // console.log(__filename)
//   // response.send("Hello World")
//   response.sendFile(`${__dirname}/public/index.html`)
// })

// app.get('/AddPost.html', (_request, response) => {
//   response.sendFile(`${__dirname}/view/AddPost.html`)
// })

// app.get('/script.js', (_request, response) => {
//   response.sendFile(`${__dirname}/files/script.js`)
// })

// app.get('/style.css', (_request, response) => {
//   response.sendFile(`${__dirname}/files/style.css`)
// })

app.get('/posts', getAllPosts)
app.get('/posts/:postId', getPostById)
app.delete('/posts/:postId', deletePost)
app.post('/posts', addPost)
app.put('/posts/:postId', editPost)


app.listen(8000, () => {
  console.log("Server started Sucessfully")
})