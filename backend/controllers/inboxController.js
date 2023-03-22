const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");

class InboxController {
  static async createInbox(req, res) {
    const { item } = req.body;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");

    try {
      const { error, item_id } = await createItem("inbox", {
        item,
        created_at,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(201).json({ item_id, message: "Item created successfully!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getInbox(req, res) {
    const itemId = req.params.id;

    if (!itemId) return res.status(404).json({ message: "Item not found!" });
    try {
      const { error, result: item } = await getItem("inbox", {
        user_id: req.user.userId,
        id: itemId,
      });
      if (error) throw new Error(error);
      if (item.length !== 0) return res.status(200).json(item);
      return res.status(404).json({ message: "Item not found!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getAllInbox(req, res) {
    try {
      const { error, result: items } = await getItem("inbox", {
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(200).json(items);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async updateInbox(req, res) {
    const itemId = req.params.id;
    const { item } = req.body;

    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result: row } = await getItem("inbox", { id: itemId });
      if (error) throw new Error(error);
      if (row.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      if (row[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ message: "You are not authorized to update this resource!" });
      await updateItem("inbox", { id: itemId }, { item });
      res.status(200).json({ message: "Item updated!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async deleteInbox(req, res) {
    const itemId = req.params.id;
    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result: row } = await getItem("inbox", {
        id: itemId,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (row.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      await deleteItem("inbox", itemId);
      res.status(200).json({ message: "Item deleted." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = InboxController;
