const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");
const table = "contexts";

class ContextController {
  static async createContext(req, res) {
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const { name } = req.body;
    try {
      const { error, result } = await createItem(table, {
        name,
        created_at,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(201).json("Context added.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
  static async getContext(req, res) {
    const id = req.params.id;
    try {
      const { error, result } = await getItem(table, {
        id,
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
  static async getContexts(req, res) {
    try {
      const { error, result } = await getItem(table, {
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

  static async updateContext(req, res) {
    const id = req.params.id;
    const { name } = req.body;
    if (!id) return res.sendStatus(404);
    try {
      const { error, result } = await getItem(table, {
        id,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Item not found.");
      const { error: e, result: r } = await updateItem(table, { id }, { name });
      if (e) throw new Error(e);
      res.status(200).json("Context updated.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }

  static async deleteContext(req, res) {
    const id = req.params.id;
    if (!id) return res.sendStatus(404);
    try {
      const { error, result } = await getItem(table, {
        id,
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

module.exports = ContextController;
