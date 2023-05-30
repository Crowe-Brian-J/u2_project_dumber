const express = require('express')
const router = express.Router()

//Use controllers/users
const usersCtrl = require('../controllers/users')

/* GET users listing */
router.get('/', usersCtrl.index)

module.exports = router
