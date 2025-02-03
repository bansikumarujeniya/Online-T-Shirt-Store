var express = require("express");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

var router = express.Router();

router.post(
  "/signup",

  check("name")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 chars long"),

  check("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 chars long"),

  check("email").isEmail().withMessage("Email is required"),

  signup
);

router.post(
  "/signin",

  check("password").isLength({ min: 1 }).withMessage("password is required"),

  check("email").isEmail().withMessage("Email is required"),

  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
  res.send("A protected route");
});

module.exports = router;
