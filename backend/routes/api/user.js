const express = require("express");
const {UserController} = require("../../controllers");
const verifyJWT = require('../../middlewares/authenticate');
const {validateSignup,signupValidationResult} = require('../../validation/validateSignUp');


const router = express.Router();
const {signIn,signUp,refreshToken,signOut,sendPasswordResetEmail,resetPassword} = UserController;

router.post('/sign-up', validateSignup, signupValidationResult,signUp)
router.post('/sign-in', validateSignup, signupValidationResult,signIn)
router.get('/sign-out',signOut)
router.get('/reset-token',refreshToken);
router.post('/send-password-link',sendPasswordResetEmail);
router.post('/reset-password',resetPassword);
router.get('/users', verifyJWT,(req,res)=>{
    res.status(200).json(req.email);
})

module.exports = router;