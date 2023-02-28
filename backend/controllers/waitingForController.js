const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");
const table = "waiting_for";

class WaitingForController {
  static async createWaitingFor(req, res) {
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const { item_name, description, contact_name, contact_email, due_date } =
      req.body;
    try {
      const { error, result } = await createItem(table, {
        item_name,
        description,
        contact_name,
        contact_email,
        due_date,
        created_at,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(201).json("Waiting for added.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
  static async getWaitingFor(req, res) {
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
  static async getWaitingFors(req, res) {
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

  static async updateWaitingFor(req, res) {
    const id = req.params.id;
    const { item_name, description, contact_name, contact_email, due_date } =
      req.body;
    if (!id) return res.sendStatus(404);
    try {
      const { error, result } = await getItem(table, {
        id,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (result.length === 0) return res.status(404).json("Item not found.");
      const { error: e, result: r } = await updateItem(
        table,
        { id },
        { item_name, description, contact_name, contact_email, due_date }
      );
      if (e) throw new Error(e);
      res.status(200).json("Waiting for updated.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }

  static async deleteWaitingFor(req, res) {
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

module.exports = WaitingForController;
