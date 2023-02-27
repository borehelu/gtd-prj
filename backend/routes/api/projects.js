const express = require("express");
const { verifyJWT, validate } = require("../../middlewares");
const ProjectsController = require("../../controllers/projectsController");

const router = express.Router();
const { createItem, getItem, getItems, updateItem, deleteItem } =
  ProjectsController;

router.post("/", verifyJWT, validate("createProjects"), createItem);
router.get("/:id", verifyJWT, getItem);
router.get("/", verifyJWT, getItems);
router.put("/:id", verifyJWT, validate("createProjects"), updateItem);
router.delete("/:id", verifyJWT, deleteItem);

module.exports = router;
