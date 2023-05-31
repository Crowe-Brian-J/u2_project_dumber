const express = require('express')
const router = express.Router()

//Use controllers/users
const usersCtrl = require('../controllers/users')

/* GET users listing */
router.get('/users', usersCtrl.index)
/* GET /users/:id (show functionality) */
router.get('/users/:id', usersCtrl.show)

module.exports = router
