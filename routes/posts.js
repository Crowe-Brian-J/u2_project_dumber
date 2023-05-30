const express = require('express')
const router = express.Router()

//use controllers/posts
const postsCtrl = require('../controllers/posts')
const post = require('../models/post')

//GET users listening
router.get('/', postsCtrl.index)

//POST new post
router.post('/', postsCtrl.createPost)
