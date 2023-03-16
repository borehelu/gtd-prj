const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");
const table = "references";

class ReferenceController {
  static async createReference(req, res) {
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const { name, description, type, path } = req.body;
    try {
      const { error, result } = await createItem(table, {
        name,
        created_at,
        description,
        type,
        path,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(201).json("Reference added.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
  static async getReference(req, res) {
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
  static async getReferences(req, res) {
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

  static async updateReference(req, res) {
    const id = req.params.id;
    const { name, description, type, path } = req.body;
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
        { name, description, type, path }
      );
      if (e) throw new Error(e);
      res.status(200).json("Reference updated.");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }

  static async deleteReference(req, res) {
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

module.exports = ReferenceController;
