const express = require('express')
const router = express.Router()

//Use controllers/posts
const postsCtrl = require('../controllers/posts')
//Require the authorization middleware
const ensureLoggedIn = require('../config/ensureLoggedIn')

//GET users listening
router.get('/', postsCtrl.index)

//POST new post
router.post('/', ensureLoggedIn, postsCtrl.createPost)

router.delete('/', ensureLoggedIn, postsCtrl.deletePost)

module.exports = router
