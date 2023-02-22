const express = require('express');
const userRoute = require('./api/user');
const inboxRoute = require('./api/inbox');

const router = express.Router();

router.use('/auth', userRoute);
router.use('/inbox',inboxRoute)

module.exports = router;