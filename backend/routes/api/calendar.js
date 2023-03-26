const express = require("express");
const {
  createCalendar,
  getCalendar,
  getAllCalendar,
  updateCalendar,
  deleteCalendar,
} = require("../../controllers/calendarController");
const { verifyJWT, validate } = require("../../middlewares");

const router = express.Router();

router.post("/", verifyJWT, validate("createCalendar"), createCalendar);
router.get("/:id", verifyJWT, getCalendar);
router.get("/", verifyJWT, getAllCalendar);
router.put("/:id", verifyJWT, validate("createCalendar"), updateCalendar);
router.delete("/:id", verifyJWT, deleteCalendar);

module.exports = router;
