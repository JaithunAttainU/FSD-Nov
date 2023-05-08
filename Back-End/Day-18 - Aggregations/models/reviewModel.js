//Schema for movie Collection
const { Schema, model, default: mongoose } = require('mongoose')

const reviewSchema = new Schema({
  // userName: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'users'
  // },
  userName: String,
  comment: {
    type: String,
    required: true,
    maxLength: 100
  },
  likes: {
    type: Number,
    default: 0
  },
  postedTime: {
    type: Date,
    default: Date.now()
  },
  movieId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'movies'
  }
})

const ReviewModel = model('reviews', reviewSchema)
module.exports = ReviewModel