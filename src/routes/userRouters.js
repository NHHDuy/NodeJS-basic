const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userControllers");
const validateJWT = require("../middlewares/jwtValidateHandler");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").get(validateJWT, currentUser);

module.exports = router;
