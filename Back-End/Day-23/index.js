const express = require('express')
const movieRouter = require('./routes/moviesRouter')
const { initDB } = require('./dbConfig')
const app = express()


app.use(express.json())
app.use(express.urlencoded())

initDB()
app.use('/movies', movieRouter)


app.listen(8000, () => {
  console.log("Server started")
})