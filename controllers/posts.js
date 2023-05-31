const Post = require('../models/post')
//Not needed yet
//const User = require('../models/user')

const index = async (req, res) => {
  const posts = await Post.find({})
  res.render('posts/index', { title: 'dummer', posts })
}

const show = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('posts/show', { title: 'dummer', post })
}

const createPost = async (req, res) => {
  //Add the user-centric info to req.body of the new post
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    await Post.create(req.body)
    res.redirect('/posts')
  } catch (err) {
    res.render('posts', { errorMsg: err.message })
  }
}

const deletePost = async (req, res, next) => {
  await Post.deleteOne({ _id: req.params.id })
  res.redirect('/posts')
}

module.exports = {
  index,
  show,
  createPost,
  deletePost
}
