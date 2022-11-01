const router = require("express").Router();
const passport = require("passport");

// root route
router.get("/login", (req, res) => {
  res.render("Welcome to our app!");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/home", //! update
    failureRedirect: "/auth/google", //! update
    successMessage: true,
    failureMessage: true,
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
