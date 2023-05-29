const mongoose = require('mongoose')
//optional shortcut to mongoose.Schema class
const Schema = mongoose.Schema

const userSchema = new Schema({}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
