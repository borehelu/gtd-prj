const pool = require('../database/connection');
const moment = require('moment');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);

class InboxController{
    static async createItem(req,res){
        const item = req.body.item;
        const created_at = moment().format('YYYY-MM-DD HH:mm:ss');

        if(!item) return res.status(400).res.json({message:"Item is required."});
        try{
            await query('INSERT INTO inbox (item,created_at,user_id) VALUES(?,?,?)',[item,created_at,req.user.userId]);
            res.status(201).json({message:"Item created successfully!"});
        } catch (err){
            console.log(err.message);
            res.status(500).json({message:"Server error!"})
        }
    }

    static async getItem(req,res){
        const itemId = req.params.id;
        
        if(!itemId) return res.status(404).res.json({message:"Item not found!"})
        try{
            const [item] = await query('SELECT * FROM inbox WHERE id = ? AND user_id = ?',[itemId,req.user.userId]);
            res.status(200).json(item);
        } catch (err){
            console.log(err);
            res.status(500).json({message:"Server error!"});
        }
    }

    static async getItems(req,res){
        

    }

    static async updateItem(req,res){
        res.send("You are updating an item");
    }

    static async deleteItem(req,res){
        res.send("You are deleting an item");
    }

}

module.exports = InboxController;