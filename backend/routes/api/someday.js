const express = require("express");
const { validate, verifyJWT } = require("../../middlewares");
const SomedayController = require('../../controllers/somedayController');
const router = express.Router();

router.post("/", verifyJWT, validate("createSomeday"),SomedayController.createSomeday);
router.get("/:id", verifyJWT,SomedayController.getSomeday);
router.get("/", verifyJWT,SomedayController.getSomedays);
router.put("/:id", verifyJWT, validate("createSomeday"),SomedayController.updateSomeday);
router.delete("/:id", verifyJWT,SomedayController.deleteSomeday);

module.exports = router;
