const router = require("express").Router();
const passport = require("passport");

// root route
router.get("/", (req, res) => {
  res.send("Welcome to our app!");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/api/object", //! update
    failureRedirect: "/", //! update
  })
);

// OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/");
});

module.exports = router;
