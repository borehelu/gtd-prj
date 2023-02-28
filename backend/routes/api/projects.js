const express = require("express");
const { verifyJWT, validate } = require("../../middlewares");
const ProjectsController = require("../../controllers/projectsController");
const ProjectTasksController = require("../../controllers/projectTasksController");

const router = express.Router();
const { createProject, getProject, getProjects, updateProject, deleteProject } =
  ProjectsController;

router.post("/", verifyJWT, validate("createProjects"), createProject);
router.get("/:id", verifyJWT, getProject);
router.get("/", verifyJWT, getProjects);
router.put("/:id", verifyJWT, validate("createProjects"), updateProject);
router.delete("/:id", verifyJWT, deleteProject);

router.post(
  "/:id/tasks",
  verifyJWT,
  validate("createProjectTasks"),
  ProjectTasksController.createTask
);
router.get("/:id/tasks/:task_id", verifyJWT, ProjectTasksController.getTask);
router.get("/:id/tasks", verifyJWT, ProjectTasksController.getTasks);
router.put(
  "/:id/tasks/:task_id",
  verifyJWT,
  validate("createProjectTasks"),
  ProjectTasksController.updateTask
);
router.delete(
  "/:id/tasks/task_id",
  verifyJWT,
  ProjectTasksController.deleteTask
);

module.exports = router;
