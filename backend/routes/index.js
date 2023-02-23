const express = require('express');
const userRoute = require('./api/user');
const inboxRoute = require('./api/inbox');
const projectRoute = require('./api/projects');

const router = express.Router();

router.use('/auth', userRoute);
router.use('/inbox',inboxRoute);
router.use('/projects',projectRoute);

module.exports = router;