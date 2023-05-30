const mongoose = require('mongoose')
//optional shortcut to mongoose.Schema class
const Schema = mongoose.Schema

const replySchema = new Schema(
  {
    user: {
      type: mongoose.ObjectId,
      ref: 'User',
      required: true
    },
    replyText: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const postSchema = new Schema(
  {
    user: {
      type: mongoose.ObjectId,
      ref: 'User',
      required: true
    },
    postText: {
      type: String,
      required: true
    },
    replies: [replySchema]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)
