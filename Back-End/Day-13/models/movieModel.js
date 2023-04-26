//Schema for movie Collection
const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 25,
    minLength: 3
  },
  releaseDate: {
    type: Date,
    default: Date.now()
  },
  language: String,
  cast: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  is3d: Boolean
})

//Map mongodb(movies) collection to the schema that we have created above and .model will return a obj using which you can perform all db operations
const MovieModel = model('movies', movieSchema)
module.exports = MovieModel