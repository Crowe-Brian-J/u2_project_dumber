const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    //Then verify the callback function...
    //Marking a function as async allows us
    //to consume promises using the await keyword
    async (accessToken, refreshToken, profile, cb) => {
      /* When using async/await to consume promises, there is no use of .then or
      .catch, so we use a try catch block to handle an error */
      try {
        /* A user has logged in with OAuth. Instead of using a promise then with a callback, we can use the await keyword followed by the promise.
        When that promise is fulfilled, it will return whatever the promise's resolved value is */
        let user = await User.findOne({
          googleId: profile.id
        })
        //Existing user found, so provide it to Passport
        if (user) return cb(null, user)
        //We have a new user via OAuth
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        })
        return cb(null, user)
      } catch (err) {
        return cb(err)
      }
    }
  )
)

passport.serializeUser((user, cb) => {
  cb(null, user._id)
})

passport.deserializeUser(async (userId, cb) => {
  cb(null, await User.findById(userId))
  /* The above async/await code replaces this code
  User.findById(userId).then((user) => {
    cb(null, user)
  }) */
})
