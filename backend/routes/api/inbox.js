const express = require("express");
const {
  createInbox,
  getInbox,
  getAllInbox,
  updateInbox,
  deleteInbox,
} = require("../../controllers/inboxController");
const { verifyJWT, validate } = require("../../middlewares");

const router = express.Router();

router.post("/", verifyJWT,validate('createInbox'), createInbox);
router.get("/:id", verifyJWT, getInbox);
router.get("/", verifyJWT, getAllInbox);
router.put("/:id", verifyJWT,validate('createInbox'), updateInbox);
router.delete("/:id", verifyJWT, deleteInbox);

module.exports = router;
