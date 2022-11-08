const express = require("express");
const objectController = require("../controllers/objectController");

const router = express.Router();
const isLoggedIn = require("../controllers/authController");

router.get("/", isLoggedIn, objectController.findAllObject);
router.post("/", objectController.createObject);
router.post(
  "/bulkcreatesupersecretdevroute",
  objectController.createManyObjects
);
router.post("/delete", objectController.deleteObject);
router.post("/update", objectController.updateObject);

module.exports = router;
t