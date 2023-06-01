const User = require('../models/user')
const Post = require('../models/post')

const index = async (req, res) => {
  const users = await User.find({})
  res.render('users/index', { title: 'dummer', users })
}

const show = async (req, res) => {
  const user = await User.findById(req.params.id)
  console.log(user)
  // const posts = await Post.findById(req.)
  res.render('users/show', { title: 'dummer', user })
}

module.exports = {
  index,
  show
}
