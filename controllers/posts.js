const Post = require('../models/post')
//Not needed yet
//const User = require('../models/user')

const index = async (req, res) => {
  const posts = await Post.find({})
  res.render('/posts/index', { title: 'All Posts', posts })
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
