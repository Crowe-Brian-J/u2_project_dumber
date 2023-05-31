const User = require('../models/user')
const Post = require('../models/post')

const index = async (req, res) => {
  const users = await User.find({})
  res.render('/users/index', { title: User.name, users })
}

const show = async (req, res) => {
  const user = await User.findById(req.params.id)
  console.log(users)
  // const posts = await Post.findById(req.)
  res.render('users/show', { title: 'dummer', user })
}

module.exports = {
  index,
  show
}
