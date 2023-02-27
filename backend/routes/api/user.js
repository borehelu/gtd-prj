const express = require("express");
const { UserController } = require("../../controllers");
const { verifyJWT, validate } = require("../../middlewares");

const router = express.Router();
const {
  signIn,
  signUp,
  refreshToken,
  signOut,
  sendPasswordResetEmail,
  resetPassword,
} = UserController;

router.post("/sign-up", validate("createUser"), signUp);
router.post("/sign-in", validate("loginUser"), signIn);
router.get("/sign-out", signOut);
router.get("/reset-token", refreshToken);
router.post("/send-password-link", sendPasswordResetEmail);
router.post("/reset-password", resetPassword);

module.exports = router;
