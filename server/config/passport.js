const passport = require("passport");
const User = require("../models/user.model");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    // configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // passport verify callback
    async (accessToken, refreshToken, profile, done) => {
      try {
        // checks if user Google account already exists in db
        console.log("1");
        const existingGoogleAccount = await User.findOne({
          where: { googleId: profile.id },
        });
        // checks if there's user with the email in the db
        if (!existingGoogleAccount) {
          console.log("2");
          const existingEmailAccount = await User.findOne({
            where: {
              email: profile.emails[0].value,
            },
          });
          // create a new user in the db
          if (!existingEmailAccount) {
            console.log("3");
            const newAccount = await User.create({
              name: profile.displayName,
              googleId: profile.id,
              email: profile.emails[0].value,
              avatar: profile.photos[0].value,
            });
            // returns new account after being created
            return done(null, newAccount);
          }
          // if email exists in the database, return existing email account
          return done(null, existingEmailAccount);
        }
        // if user with googleID existed, return Google account
        return done(null, existingGoogleAccount);
      } catch (error) {
        throw new Error(error);
      }
    }
  )
);

// determines which data of the user object should be stored in the session - user.id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// retrieves the id stored in the session - backend call to get user instance
// by the user.id and attach it to the request object as req.user
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => done(error));
});
