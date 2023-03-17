const express = require("express");
const router = express.Router();

const {
  ctrlSignup,
  ctrlLogin,
  ctrlCurrent,
  ctrlLogout,
} = require("../../controllers/authControllers");

const {
  addSignupValidation,
  addLoginValidation,
} = require("../../middlewares/authValidation");

const { auth } = require("../../middlewares/auth");

router.post("/signup", addSignupValidation, ctrlSignup);

router.post("/login", addLoginValidation, ctrlLogin);

router.get("/current", auth, ctrlCurrent);

router.get("/logout", auth, ctrlLogout);

module.exports = router;
