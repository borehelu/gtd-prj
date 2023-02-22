const pool = require('../database/connection');
const moment = require('moment');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);

class InboxController{
    static async createItem(req,res){
        res.send("You are creating Items");
    }

    static async getItem(req,res){
        res.send("You are getting an item");
    }

    static async getItems(req,res){
        res.send("You are getting Items");
    }

    static async updateItem(req,res){
        res.send("You are updating an item");
    }

    static async deleteItem(req,res){
        res.send("You are deleting an item");
    }

}

module.exports = InboxController;