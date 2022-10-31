const { Sequelize } = require("sequelize"),
  express = require("express"),
  cors = require("cors"),
  db = require("./models"),
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  passport = require("passport"),
  path = require("path");

// configure Passport
require("./config/passport");

// load .env constants
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("DB connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // configure & mount session middleware
  app.use(
    session({
      secret: process.env.SECRET,
      // supress deprecation warnings
      resave: false,
      saveUninitialized: true,
    })
  );

  // mount passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  db.sequelize.sync();

  // ROUTES HERE
  app.use("/api/object", require("./routes/objectRoutes"));
  app.use("/", require("./routes/oauthRoutes"));

  try {
    await app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
      console.log("Happy coding.");
    });
  } catch (err) {
    console.log(`An error occurred while listening on ${PORT}: `, err);
  }
};

main();
