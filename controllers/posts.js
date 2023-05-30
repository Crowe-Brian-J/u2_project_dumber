const Post = require('../models/post')
const User = require('../models/user')

const index = async (req, res) => {
  res.render('/posts/index', { posts: await Post.find() })
}

const createPost = async (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    await Post.create(req.body)
    res.redirect('posts/')
  } catch (err) {
    res.render('posts/', { errorMsg: err.message })
  }
}

module.exports = {
  index,
  createPost
}
