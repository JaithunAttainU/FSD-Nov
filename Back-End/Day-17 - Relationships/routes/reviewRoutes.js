const { Router } = require("express");
const { addReview, getAllReviews } = require("../controllers/reviewController");

const reviewRouter = Router()

reviewRouter.post('/movies/:movieId/reviews', addReview);
reviewRouter.get('/movies/:movieId/reviews', getAllReviews);

module.exports = reviewRouter