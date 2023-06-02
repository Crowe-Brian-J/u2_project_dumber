const User = require('../models/user')
const Post = require('../models/post')

const index = async (req, res) => {
  const users = await User.find({})
  res.render('users/index', { title: 'dummer', users })
}

const show = async (req, res) => {
  const userOne = await User.findById(req.params.id)
  const posts = await Post.find({})
  // const posts = await Post.findById(req.)
  res.render('users/show', { title: 'dummer', userOne, posts })
}

module.exports = {
  index,
  show
}
