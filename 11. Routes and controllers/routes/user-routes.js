const express = require("express");
const {
  user_register,
  user_login,
  user_forgot_password
} = require("../controllers/user-controllers.js");
const router = express.Router();

router.route("/register").get(user_register);
router.route("/login").get(user_login);
router.route("/forgot-password").get(user_forgot_password)

module.exports = router;