const MovieModel = require("../models/movieModel")

const getMovies = async (request, response) => {
  const { year = 1999, rating = 8.5, genre, fields = [], sortOrder = 1 } = request.query

  // const conditions = {}

  // if (releaseYear) {
  //   conditions.releaseYear = releaseYear
  // }

  // if (name) {
  //   conditions.name = name
  // }

  // if (genre) {
  //   conditions.genre = genre
  // }

  // [{ year: 1999, count: 7 }, { year: 2000, count: 10 }, { year: 2010, count: 1 }, {year: 2015, count: 2}]
  try {
    // const movies = await MovieModel.find(conditions)

    // const movies = await MovieModel.aggregate([{
    //   $group: {
    //     _id: "$year", //field name that we want to group by
    //     count: {
    //       $sum: 1
    //     }
    //   }
    // }, {
    //   $sort: {
    //     count: -1
    //   }
    // }])
    const movies = await MovieModel.aggregate([
      {
        $match: {
          year: Number(year),
          "imdb.rating": {
            $gt: Number(rating)
          },
          num_mflix_comments: {
            $gt: 1
          }
        }
      },
      {
        $project: {
          title: 1,
          "imdb.rating": 1,
          "imdb.votes": 1,
          year: 1,
          cast: 1
        }
      },
      {
        $sort: {
          title: Number(sortOrder)
        }
      },
      // {
      //   $limit: 2
      // },
      // {
      //   $lookup: {
      //     from: "comments", //collection name,
      //     localField: "_id", //movie collection _id
      //     foreignField: "movie_id", //comments collections movie_id
      //     as: "comments", //name for the new data that is coming from another collection(comments)
      //   }
      // },
      {
        $unwind: "$cast"
      }
    ])
    response.send({ status: 'success', movies })
  } catch (error) {
    console.log("Error fetching movies from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }
}

const getMovieById = async (request, response) => {
  const { movieId } = request.params
  console.log(movieId)
  try {
    const movie = await MovieModel.findById(movieId).populate([{ path: 'reviews', select: 'comment userName postedTime', limit: 1 }])
    if (!movie) {
      response.status(404).send({ status: 'error', msg: 'Movie not Found!' })
    } else
      response.send({ status: 'success', movie })
  } catch (error) {
    console.log("Error fetching movie from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching movie from DB' })
  }
}

const postMovie = async (request, response) => {
  const movieData = request.body

  //Validations 20 lines
  try {
    const movie = await MovieModel.create(movieData)
    response.status(201).send({ status: 'success', msg: 'Movie added successfully', movie })
  } catch (error) {
    console.log(error)
    response.status(500).send({ status: 'error', msg: 'Error adding movie', error: error.errors })
  }
}

const updateMovieById = async (request, response) => {
  const { movieId } = request.params
  const updatedMovieData = request.body
  try {
    const result = await MovieModel.findByIdAndUpdate(movieId, updatedMovieData, { new: true, runValidators: true }) //to perform validators in update operations
    response.status(200).send({ status: 'success', msg: 'Movie updated successfully', movie: result })
  } catch (error) {
    console.log(error)
    response.status(500).send({ status: 'error', msg: 'Error adding movie', error: error.errors })
  }
}

const deleteMovieById = async (request, response) => {
  const { movieId } = request.params
  console.log(movieId)
  try {
    const deletedMovie = await MovieModel.findByIdAndDelete(movieId)
    response.send({ status: 'success', msg: "Movie deleted Successfully", movie: deletedMovie })
  } catch (error) {
    console.log("Error deleting movie from DB")
    response.status(500).send({ status: 'error', msg: 'Error deleting movie from DB' })
  }
}

module.exports = {
  getMovies,
  getMovieById,
  postMovie,
  updateMovieById,
  deleteMovieById
}