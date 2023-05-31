const express = require('express')
const router = express.Router()

//Use controllers/replies
const repliesCtrl = require('../controllers/replies')
//Require the authorization middleware
const ensureLoggedIn = require('../config/ensureLoggedIn')

//POST new reply
router.post('/posts/:id/replies', ensureLoggedIn, repliesCtrl.createReply)

//DELETE reply
router.delete('/replies/:id', ensureLoggedIn, repliesCtrl.deleteReply)

module.exports = router
