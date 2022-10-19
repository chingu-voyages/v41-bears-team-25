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
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingGoogleAccount = await User.findOne({
          where: { googleId: profile.id },
        });
        if (!existingGoogleAccount) {
          const existingEmailAccount = await User.findOne({
            where: {
              email: profile.emails[0].value,
            },
          });
          if (!existingEmailAccount) {
            const newAccount = await User.create({
              name: profile.displayName,
              googleId: profile.id,
              email: profile.emails[0].value,
              avatar: profile.photos[0].value,
            });
            return done(null, newAccount);
          }
          return done(null, existingEmailAccount);
        }
        return done(null, existingGoogleAccount);
      } catch (error) {
        throw new Error(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => done(error));
});
