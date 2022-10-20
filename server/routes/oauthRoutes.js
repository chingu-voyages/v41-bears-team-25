const router = require("express").Router();
const passport = require("passport");

// root route
router.get("/login", (req, res) => {
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
    successRedirect: "/", //! update
    failureRedirect: "/", //! update
    successMessage: true,
    failureMessage: true,
  })
);

// OAuth Logout Route
router.get("/logout", (req, res) => {
  req.logout();
  req.redirect("/api/object"); //! update
});

module.exports = router;
