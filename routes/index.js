const express = require('express')
const router = express.Router()
const passport = require('passport')

/* GET home page -> Redirected to feed because Twitter */
router.get('/', (req, res, next) => {
  res.redirect('/posts')
})
//Google OAuth login route
router.get(
  'auth/google',
  passport.authenticate(
    //Which passport strategy is being used?
    'google',
    {
      //Requesting the user's profile and email
      scope: ['profile', 'email']
      //Optionally force pick account every time
      //prompt: "select account"
    }
  )
)
//Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/posts',
    failureRedirect: '/posts'
  })
)
//OAuth logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/posts')
  })
})

module.exports = router
