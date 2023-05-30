const User = require('../models/user')
//Not needed yet
//const Post = require('../models/post')

const index = async (req, res) => {
  const users = await User.find({})
  res.render('/users/index', { title: User.name, users })
}

module.exports = {
  index
}
