const moment = require("moment");
const { createItem, updateItem, deleteItem, getItem } = require("../database");

class WaitingForController {
  static async createWaitingFor(req, res) {}
  static async getWaitingFor(req, res) {}
  static async getWaitingFors(req, res) {}

  static async updateWaitingFor(req, res) {}

  static async deleteWaitingFor(req, res) {}
}

module.exports = WaitingForController;
