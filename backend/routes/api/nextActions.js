const express = require("express");
const { verifyJWT, validate } = require("../../middlewares");
const {
  createNextAction,
  getNextAction,
  getNextActions,
  updateNextAction,
  deleteNextAction,
} = require("../../controllers/nextActionsController");

const router = express.Router();

router.post("/", verifyJWT, validate("createNextActions"), createNextAction);
router.get("/:id", verifyJWT, getNextAction);
router.get("/", verifyJWT, getNextActions);
router.put("/:id", verifyJWT, validate("createNextActions"), updateNextAction);
router.delete("/:id", verifyJWT, deleteNextAction);

module.exports = router;
