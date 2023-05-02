const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const { initDB } = require('./dbConfig')
const moviesRouter = require('./routes/moviesRouter')
const authRouter = require('./routes/authRouter')
initDB()

const app = express()
app.use(express.json())

app.use('/movies', moviesRouter)
app.use('/', authRouter)


app.listen(8000, () => {
  console.log("Server Started Successfully")
})