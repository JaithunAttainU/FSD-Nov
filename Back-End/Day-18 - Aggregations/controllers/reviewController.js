const MovieModel = require("../models/movieModel")
const ReviewModel = require("../models/reviewModel")

const addReview = async (req, res) => {
  //1) Insert the docu in review collection
  //2) Get the _id of the above operation
  //3) Push that _id inside reviews array in movie collection

  const { comment, userName } = req.body
  const { movieId } = req.params
  try {
    //1
    const newReview = await ReviewModel.create({ comment, userName, movieId })

    //2 & 3
    await MovieModel.findByIdAndUpdate(movieId, {
      $push: {
        reviews: newReview._id
      }
    })

    res.send({ status: 'success', review: newReview })
  } catch (error) {
    res.send({ status: 'error', msg: 'Error adding review!' })
  }
}


const getAllReviews = async (req, res) => {
  const { movieId } = req.params
  // try {
  //   const movieData = await MovieModel.findById(movieId, { reviews: 1, _id: 0 }).populate([{ path: 'reviews', select: 'comment userName postedTime' }])
  //   res.send({ status: 'success', reviews: movieData.reviews })
  // } catch (error) {
  //   console.log("Error fetching reviews from DB")
  //   res.status(500).send({ status: 'error', msg: 'Error fetching reviews from DB' })
  // }

  try {
    const reviews = await ReviewModel.find({ movieId })
    res.send({ status: 'success', reviews })
  } catch (error) {
    console.log("Error fetching reviews from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching reviews from DB' })
  }
}
module.exports = {
  addReview,
  getAllReviews
}