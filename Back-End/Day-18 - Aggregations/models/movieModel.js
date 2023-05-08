//Schema for movie Collection
const { Schema, model, default: mongoose } = require('mongoose')

const movieSchema = new Schema({
  "title": String,
  "year": Number,
  "runtime": Number,
  "released": Date,
  "poster": String,
  "plot": String,
  "fullplot": String,
  "lastupdated": String,
  "type": String,
  "directors": [String],
  "imdb": {
    "rating": Number,
    "votes": Number,
    "id": Number,
  },
  "cast": [String],
  "countries": [String],
  "genres": [String],
  "tomatoes": {
    "viewer": {
      "rating": Number,
      "numReviews": Number
    },
    "lastUpdated": Date
  },
  "num_mflix_comments": Number
})

//Map mongodb(movies) collection to the schema that we have created above and .model will return a obj using which you can perform all db operations
const MovieModel = model('movies', movieSchema)
module.exports = MovieModel