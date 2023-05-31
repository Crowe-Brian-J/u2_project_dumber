const Post = require('../models/post')

const createReply = async (req, res) => {
  const post = await Post.findById(req.params.id)

  //Add the user-centric info to req.body of the new reply
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar

  //We can push or unshift subdocs into Mongoose arrays
  post.replies.push(req.body)
  try {
    //Save any changes made to the post doc
    await post.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/posts/${post._id}`)
}

const deleteReply = (req, res, next) => {
  Post.findOne({
    'replies._id': req.params.id,
    'replies.user': req.user._id
  }).then((post) => {
    //Rogue user!
    if (!post) return res.redirect('/posts')
    //Remove the reply using the remove method available on Mongoose arrays
    post.replies.remove(req.params.id)
    //Save the updated post object
    post
      .save()
      .then(() => {
        //Redirect back to posts
        res.redirect(`/posts/${post._id}`)
      })
      .catch((err) => {
        //Let Express display an error
        return next(err)
        //res.redirect('/posts')
      })
  })
}

module.exports = {
  createReply,
  deleteReply
}
