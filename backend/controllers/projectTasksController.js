const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");
const table = "project_tasks";

class ProjectTasksController {
  static async createTask(req, res) {
    const project_id = req.params.id;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const { task_name, description, context_id, priority, status, due_date } =
      req.body;
    try {
      const { error, result } = await createItem(table, {
        project_id,
        task_name,
        description,
        context_id,
        priority,
        status,
        due_date,
        created_at,
        user_id: req.user.userId,
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
      const { error, result } = await getItem(table, {
        id,
        project_id,
        user_id: req.user.userId,
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
      const { error, result } = await getItem(table, {
        project_id,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Not found");
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
      const { error, result } = await getItem(table, {
        project_id,
        id,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Item not found.");
      const { error: e, result: r } = await updateItem(
        table,
        { id },
        { task_name, description, context_id, priority, status, due_date }
      );
      if (e) throw new Error(e);
      res.status(200).json("Waiting for updated.");
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
      const { error, result } = await getItem(table, {
        id,
        project_id,
        user_id: req.user.userId,
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
