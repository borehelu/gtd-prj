const express = require("express");
const {UserController} = require("../../controllers");
const {validateSignup,signupValidationResult} = require('../../validation/validateSignUp');


const router = express.Router();
const {signIn,signUp,refreshToken,signOut,sendPasswordResetEmail,resetPassword} = UserController;

router.post('/sign-up', validateSignup, signupValidationResult,signUp)
router.post('/sign-in', validateSignup, signupValidationResult,signIn)
router.get('/sign-out',signOut)
router.get('/reset-token',refreshToken);
router.post('/send-password-link',sendPasswordResetEmail);
router.post('/reset-password',resetPassword);

module.exports = router;