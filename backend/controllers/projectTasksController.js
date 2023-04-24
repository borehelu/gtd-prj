const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");

const table = "project_tasks";
const isOwner = async (project_id, user_id) => {
  const { error, result } = await getItem("projects", {
    id: project_id,
    user_id,
  });
  if (error) throw new Error(error);
  if (result.length > 0) return true;
  return false;
};

class ProjectTasksController {
  static async createTask(req, res) {
    const project_id = req.params.id;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const { task_name, description, context_id, priority, status, due_date } =
      req.body;
    try {
      if (!isOwner(project_id, req.user.userId)) return res.sendStatus(403);
      const { error, result } = await createItem(table, {
        project_id,
        task_name,
        description,
        context_id,
        priority,
        status,
        due_date,
        created_at,
      });
      if (error) throw new Error(error);
      res.status(201).json("Task added.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
  static async getTask(req, res) {
    const project_id = req.params.id;
    const id = req.params.task_id;
    try {
      if (!isOwner(project_id, req.user.userId)) return res.sendStatus(403);
      const { error, result } = await getItem(table, {
        id,
        project_id,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Not found");
      res.status(200).json(result[0]);
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
  static async getTasks(req, res) {
    const project_id = req.params.id;
    try {
      if (!isOwner(project_id, req.user.userId)) return res.sendStatus(403);
      const { error, result } = await getItem(table, {
        project_id,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(200).json([]);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }

  static async updateTask(req, res) {
    const project_id = req.params.id;
    const id = req.params.task_id;
    const { task_name, description, context_id, priority, status, due_date } =
      req.body;
    if (!id) return res.sendStatus(404);
    try {
      if (!isOwner(project_id, req.user.userId)) return res.sendStatus(403);
      const { error, result } = await getItem(table, {
        project_id,
        id,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Item not found.");
      const { error: e, result: r } = await updateItem(
        table,
        { id },
        { task_name, description, context_id, priority, status, due_date }
      );
      if (e) throw new Error(e);
      res.status(200).json("Task for updated.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }

  static async deleteTask(req, res) {
    const project_id = req.params.id;
    const id = req.params.task_id;
    if (!id) return res.sendStatus(404);
    try {
      if (!isOwner(project_id, req.user.userId)) return res.sendStatus(403);
      const { error, result } = await getItem(table, {
        id,
        project_id,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Item not found.");
      const { error: e, result: r } = await deleteItem(table, id);
      if (e) throw new Error(e);
      res.status(200).json("Item deleted.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
}

module.exports = ProjectTasksController;
