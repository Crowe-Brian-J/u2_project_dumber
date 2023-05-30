const express = require('express')
const router = express.Router()

//Use controllers/posts
const postsCtrl = require('../controllers/posts')
//Require the authorization middleware
const ensureLoggedIn = require('../config/ensureLoggedIn')

//GET posts listing
router.get('/posts', postsCtrl.index)

//POST new post
router.post('/posts', ensureLoggedIn, postsCtrl.createPost)

//DELETE post
router.delete('/posts/:id', ensureLoggedIn, postsCtrl.deletePost)

module.exports = router
