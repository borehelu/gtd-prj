const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");

class ProjectsController {
  static async createProject(req, res) {
    const { project_name, description, outcome, due_date, priority, status } =
      req.body;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const project = {
      project_name,
      description,
      outcome,
      due_date,
      priority,
      status,
      created_at,
      user_id: req.user.userId,
    };
    try {
      const { error, result } = await createItem("projects", project);
      if (error) throw new Error(error);
      res.status(201).json({ message: "Item created successfully!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getProject(req, res) {
    const itemId = req.params.id;

    if (!itemId) return res.status(400).json({ message: "Id is required!" });
    try {
      const { error, result } = await getItem("projects", {
        user_id: req.user.userId,
        id: itemId,
      });
      if (error) throw new Error(error);
      if (result.length === 0)
        return res.status(404).json({ message: "Project not found!" });
      res.status(200).json(result[0]);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getProjects(req, res) {
    try {
      const { error, result } = await getItem("projects", {
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async updateProject(req, res) {
    const itemId = req.params.id;
    const { project_name, description, outcome, due_date, priority, status } =
      req.body;
    const project = {
      project_name,
      description,
      outcome,
      due_date,
      priority,
      status,
    };

    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result } = await getItem("projects", { id: itemId });
      if (error) throw new Error(error);
      if (result.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      if (result[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ message: "You are not authorized to update this resource!" });
      const { error: e, result: r } = await updateItem(
        "projects",
        { id: itemId },
        project
      );
      if (e) throw new Error(e);
      res.status(200).json({ message: "Item updated!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async deleteProject(req, res) {
    const itemId = req.params.id;
    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result } = await getItem("projects", {
        id: itemId,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (result.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      await deleteItem("projects", itemId);
      res.status(200).json({ message: "Item deleted." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = ProjectsController;
