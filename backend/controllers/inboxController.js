const pool = require("../database/connection");
const moment = require("moment");
const util = require("util");

const query = util.promisify(pool.query).bind(pool);

class InboxController {
  static async createItem(req, res) {
    const item = req.body.item;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");

    if (!item) return res.status(400).json({ message: "Item is required." });
    try {
      await query("INSERT INTO inbox (item,created_at,user_id) VALUES(?,?,?)", [
        item,
        created_at,
        req.user.userId,
      ]);
      res.status(201).json({ message: "Item created successfully!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getItem(req, res) {
    const itemId = req.params.id;

    if (!itemId) return res.status(404).json({ message: "Item not found!" });
    try {
      const item = await query(
        "SELECT * FROM inbox WHERE id = ? AND user_id = ?",
        [itemId, req.user.userId]
      );
      if (item.length === 0) res.status(200).json(item);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getItems(req, res) {
    try {
      const items = await query("SELECT * FROM inbox WHERE user_id = ?", [
        req.user.userId,
      ]);
      res.status(200).json(items);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async updateItem(req, res) {
    const itemId = req.params.id;
    const item = req.body.item;
    if (!itemId || !item)
      return res.status(400).json({ message: "Id is required!" });

    try {
      const row = await query("SELECT * FROM inbox WHERE id = ?", [itemId]);
      if (row.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      if (row[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ message: "You are not authorized to update this resource!" });
      await query("UPDATE inbox SET item = ? WHERE id = ? AND user_id = ?", [
        item,
        itemId,
        req.user.userId,
      ]);
      res.status(200).json({ message: "Item updated!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async deleteItem(req, res) {
    const itemId = req.params.id;
    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const row = await query(
        "SELECT * FROM inbox WHERE id = ? AND user_id = ?",
        [itemId, req.user.userId]
      );
      if (row.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      await query("DELETE FROM inbox WHERE id = ? AND user_id = ?", [
        itemId,
        req.user.userId,
      ]);
      res.status(200).json({ message: "Item deleted." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = InboxController;
