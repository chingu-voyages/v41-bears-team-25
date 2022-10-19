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
