const Post = require('../models/post')
//Not needed yet
//const User = require('../models/user')

const index = async (req, res) => {
  const posts = await Post.find({})
  res.render('posts/index', { title: 'dummer', posts })
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
    res.redirect('posts/')
  } catch (err) {
    res.render('posts', { errorMsg: err.message })
  }
}

// const deletePost = (req, res, next) => {
//   Post.findOne({
//     'posts._id': req.params.id,
//     'posts.user': req.user._id
//   }).then((post) => {
//     console.log(post)
//     //Rogue user!
//     if (!post) return res.redirect('/posts')
//     //Remove the post using the remove method available on Mongoose arrays
//     post.remove(req.params.id)
//     //Save the updated post object?
//     res.redirect('posts')
//   })
// }

const deletePost = (req, res, next) => {
  Post.deleteOne(req.params.id)
  res.redirect('/posts ')
}

module.exports = {
  index,
  createPost,
  deletePost
}
