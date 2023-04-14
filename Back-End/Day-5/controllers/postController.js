const posts = require('../mock/posts')


const getAllPosts = (request, response) => {
  //Check the authentication
  //logging
  console.log("Posts Get called triggered")

  let filteredPosts = posts
  const { userId, title } = request.query//{ userId: '4', title: 'ullam ut quidem id aut vel consequuntur' }

  if (userId) { //10
    filteredPosts = filteredPosts.filter((post) => {
      return post.userId === Number(userId)
    })
  }

  if (title) { //1
    filteredPosts = filteredPosts.filter((post) => {
      return post.title == title
    })
  }

  //DB call - fetch all the posts and return
  response.send({ status: 'success', data: filteredPosts })
}

const getPostById = (request, response) => {
  //Check the authentication
  const { postId } = request.params //{postId: '20'}

  const postIdNum = Number(postId)
  const requestedPost = posts.filter((post) => {
    return post.id === postIdNum
  })

  if (requestedPost.length == 0) {
    response.status(404).send({ status: 'error', msg: 'No posts found with requested ID!' })
  } else {
    response.send({ status: 'success', data: requestedPost[0] })
  }
}

const deletePost = (request, response) => {
  //Check the authentication
  const { postId } = request.params //{postId: '20'}

  const postIdNum = Number(postId)

  // posts = posts.filter((post) => {
  //   return post.id === postIdNum ? false : true
  // })

  const index = posts.findIndex((post) => {
    return post.id === postIdNum
  })

  if (index == -1) {
    response.send({ status: 'error', msg: 'Data not found!' })
  } else {
    posts.splice(index, 1)
    response.send({ status: 'success', msg: 'Deleted Successfully' })
  }
}

const addPost = (request, response) => {
  //Check the authentication
  //Get the data and add the posts

  //validate
  const newPostData = request.body
  if (newPostData) {
    posts.push(newPostData)
    response.send({ status: 'success', msg: 'Post Added successfully', data: newPostData })
  } else {
    response.status(400).send({ status: 'error', msg: 'Invalid Input' })
  }
}

const editPost = (request, response) => {
  //Check the authentication
  const { postId } = request.params //{postId: '20'}

  const postIdNum = Number(postId)
  const index = posts.findIndex((post) => {
    return post.id === postIdNum
  })

  if (index == -1) {
    response.status(404).send({ status: 'error', msg: 'Posts not found!' })
  } else {
    const newPostData = request.body
    if (newPostData) {
      const oldPostData = posts[index];

      posts[index] = {
        ...oldPostData, //id, userId, body, title
        ...newPostData //body
      }
      response.send({ status: 'success', msg: 'Posts edited successfully', data: posts[index] })
    } else {
      response.status(400).send({ status: 'error', msg: 'Invalid Input' })
    }
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  deletePost,
  addPost,
  editPost
}