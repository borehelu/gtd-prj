const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");

class CalendarController {
  static async createCalendar(req, res) {
    const {
      event_name,
      event_description,
      event_date,
      event_start,
      event_end,
      event_location,
    } = req.body;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");

    const event = {
      event_name,
      event_description,
      event_date,
      event_start,
      event_end,
      event_location,
      created_at,
      user_id: req.user.userId,
    };

    try {
      const { error, item_id } = await createItem("calendar", event);
      if (error) throw new Error(error);
      res.status(201).json({ item_id, message: "Item created successfully!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async getCalendar(req, res) {
    const itemId = req.params.id;

    if (!itemId) return res.status(404).json({ message: "Item not found!" });
    try {
      const { error, result: item } = await getItem("calendar", {
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

  static async getAllCalendar(req, res) {
    try {
      const { error, result: items } = await getItem("calendar", {
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      res.status(200).json(items);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async updateCalendar(req, res) {
    const itemId = req.params.id;
    const {
      event_name,
      event_description,
      event_date,
      event_start,
      event_end,
      event_location,
    } = req.body;

    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result: row } = await getItem("calendar", { id: itemId });
      if (error) throw new Error(error);
      if (row.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      if (row[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ message: "You are not authorized to update this resource!" });
      await updateItem(
        "calendar",
        { id: itemId },
        {
          event_name,
          event_description,
          event_date,
          event_start,
          event_end,
          event_location,
        }
      );
      res.status(200).json({ message: "Item updated!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }

  static async deleteCalendar(req, res) {
    const itemId = req.params.id;
    if (!itemId) return res.status(400).json({ message: "Id is required!" });

    try {
      const { error, result: row } = await getItem("calendar", {
        id: itemId,
        user_id: req.user.userId,
      });
      if (error) throw new Error(error);
      if (row.length === 0)
        return res.status(404).json({ message: "Item not found!" });
      if (row[0].user_id !== req.user.userId)
        return res
          .status(403)
          .json({ messsage: "You are not authorized to delete the resource." });
      await deleteItem("calendar", itemId);
      res.status(200).json({ message: "Item deleted." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = CalendarController;
