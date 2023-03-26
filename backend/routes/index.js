const express = require("express");
const userRoute = require("./api/user");
const inboxRoute = require("./api/inbox");
const projectRoute = require("./api/projects");
const nextActionsRoute = require("./api/nextActions");
const contextRoute = require("./api/context");
const referenceRoute = require("./api/reference");
const waitingForRoute = require("./api/waitingFor");
const somedayRoute = require("./api/someday");
const calendarRoute = require("./api/calendar");

const router = express.Router();

router.use("/auth", userRoute);
router.use("/inbox", inboxRoute);
router.use("/projects", projectRoute);
router.use("/next-actions", nextActionsRoute);
router.use("/context", contextRoute);
router.use("/reference", referenceRoute);
router.use("/waiting-for", waitingForRoute);
router.use("/someday", somedayRoute);
router.use("/calendar", calendarRoute);

module.exports = router;
