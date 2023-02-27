const express = require("express");
const { verifyJWT, validate } = require("../../middlewares");
const ProjectsController = require("../../controllers/projectsController");

const router = express.Router();
const { createProject, getProject, getProjects, updateProject, deleteProject } =
  ProjectsController;

router.post("/", verifyJWT, validate("createProjects"), createProject);
router.get("/:id", verifyJWT, getProject);
router.get("/", verifyJWT, getProjects);
router.put("/:id", verifyJWT, validate("createProjects"), updateProject);
router.delete("/:id", verifyJWT, deleteProject);

module.exports = router;
