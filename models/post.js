const mongoose = require('mongoose')
//optional shortcut to mongoose.Schema class
const Schema = mongoose.Schema

const replySchema = new Schema(
  {
    replyText: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String,
    replies: [replySchema]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)
