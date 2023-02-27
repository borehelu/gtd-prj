const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");

class NextActionsController {
  static async createNextAction(req, res) {
    const { item_name, description, due_date, priority, status } = req.body;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const next_action = {
      item_name,
      description,
      due_date,
      priority,
      status,
      created_at,
      user_id: req.user.userId,
    };
    try {
      const { error, result } = createItem("next_actions", next_action);
      if (error) throw new Error(error);
      res.status(201).json({ message: "Item created successfully!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getNextAction(req, res) {
    const itemId = req.params.id;

    if (!itemId) return res.status(400).json({ message: "Id is required!" });
    try {
      const { error, result: item } = await getItem("next_actions", {
        id: itemId,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (item.length === 0)
        return res.status(404).json({ message: "Next action not found!" });

      return res.status(200).json(item);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getNextActions(req, res) {
    try {
      const { error, result: items } = await getItem("next_actions", {
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(200).json(items);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async updateNextAction(req, res) {
    const itemId = req.params.id;
    const { item_name, description, due_date, priority, status } = req.body;

    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result } = await getItem("next_actions", { id: itemId });
      if (error) throw new Error(error);
      if (result.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      if (result[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ message: "You are not authorized to update this resource!" });
      await updateItem(
        "next_actions",
        { id: itemId },
        { item_name, description, due_date, priority, status }
      );
      res.status(200).json({ message: "Item updated!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async deleteNextAction(req, res) {
    const itemId = req.params.id;
    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result } = await getItem("next_actions", { id: itemId });
      if (error) throw new Error(error);
      if (result.length === 0)
        return res.status(404).json({ message: "Item not found!" });

      if (result[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ messsage: "You are not authorized to delete the resource." });
      await deleteItem("next_actions", itemId);
      res.status(200).json({ message: "Item deleted." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = NextActionsController;
