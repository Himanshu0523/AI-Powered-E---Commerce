const express = require("express");
const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/auth.controller");


/*
REGISTER
POST /api/auth/register
*/
router.post("/register", authController.registerUser);


/*
LOGIN
POST /api/auth/login
*/
router.post("/login", authController.loginUser);


/*
FORGOT PASSWORD
POST /api/auth/forgot-password
*/
router.post("/forgot-password", authController.forgetPassword);



/*
GOOGLE LOGIN
GET /api/auth/google
*/
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);


/*
GOOGLE CALLBACK
*/
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login"
  }),
  (req, res) => {

    const token = generateToken(req.user);

    res.json({
      success: true,
      token,
      user: req.user
    });

  }
);



/*
GITHUB LOGIN
*/
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);



/*
GITHUB CALLBACK
*/
router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/login"
  }),
  (req, res) => {

    const token = generateToken(req.user);

    res.json({
      success: true,
      token,
      user: req.user
    });

  }
);



/*
LINKEDIN LOGIN
*/
router.get(
  "/linkedin",
  passport.authenticate("linkedin")
);



/*
LINKEDIN CALLBACK
*/
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    session: false,
    failureRedirect: "/login"
  }),
  (req, res) => {

    const token = generateToken(req.user);

    res.json({
      success: true,
      token,
      user: req.user
    });

  }
);


module.exports = router;