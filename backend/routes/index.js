const express = require("express");
const userRoute = require("./api/user");
const inboxRoute = require("./api/inbox");
const projectRoute = require("./api/projects");
const tasksRoute = require("./api/tasks");

const router = express.Router();

router.use("/auth", userRoute);
router.use("/inbox", inboxRoute);
router.use("/projects", projectRoute);
router.use("/tasks", tasksRoute);

module.exports = router;
