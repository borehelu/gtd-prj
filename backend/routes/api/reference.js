const express = require("express");
const { validate, verifyJWT } = require("../../middlewares");
const ReferenceController = require("../../controllers/referenceController");
const router = express.Router();

router.post("/", verifyJWT, validate("createReference"), ReferenceController.createReference);
router.get("/:id", verifyJWT, ReferenceController.getReference);
router.get("/", verifyJWT, ReferenceController.getReferences);
router.put("/:id", verifyJWT, validate("createReference"), ReferenceController.updateReference);
router.delete("/:id", verifyJWT, ReferenceController.deleteReference);

module.exports = router;
