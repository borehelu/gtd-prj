const pool = require('../database/connection');
const moment = require('moment');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);

class TasksController{
    static async createItem(req,res){
        const {project_id,name,description,due_date,priority,status,notes} = req.body;
        const created_at = moment().format('YYYY-MM-DD HH:mm:ss');

        
        try{
            await query('INSERT INTO tasks (project_id,name,description,due_date,priority,status,notes,created_at,user_id) VALUES(?,?,?,?,?,?,?,?,?)',[project_id,name,description,due_date,priority,status,notes,created_at,req.user.userId]);
            res.status(201).json({message:"Item created successfully!"});
        } catch (err){
            console.log(err.message);
            res.status(500).json({message:"Server error!"})
        }
    }

    static async getItem(req,res){
        const itemId = req.params.id;
        
        if(!itemId) return res.status(400).json({message:"Id is required!"})
        try{
            const item = await query('SELECT * FROM tasks WHERE id = ? AND user_id = ?',[itemId,req.user.userId]);
            if(item.length === 0) return res.status(404).json({message: "Task not found!"});

            res.status(200).json(item);
        } catch (err){
            console.log(err);
            res.status(500).json({message:"Server error!"});
        }
    }

    static async getItems(req,res){
        try {
            const items = await query('SELECT * FROM tasks WHERE user_id = ?',[req.user.userId]);
            res.status(200).json(items);
        } catch (err) {
            console.log(err)
            res.status(500).json({message:"Server error!"});
        }

    }

    static async updateItem(req,res){
        const itemId = req.params.id;
        const {project_id,name,description,due_date,priority,status,notes} = req.body;

        if(!itemId) return res.status(400).json({message:"Id is required!"});

        try {
            const row = await query('SELECT * FROM projects WHERE id = ?',[itemId]);
            if(row.length === 0) return res.status(404).json({message:"Item not found!"});
            if(row[0].user_id !== req.user.userId) return res.status(403).json({message:"You are not authorized to update this resource!"})
            await query('UPDATE tasks SET project_id=?,name=?,description=?,due_date=?,priority=?,status=?,notes=? WHERE id = ? AND user_id = ?',[project_id,name,description,due_date,priority,status,notes,itemId,req.user.userId]);
            res.status(200).json({message:"Item updated!"})
        } catch (err) {
            console.log(err)
            res.status(500).json({message:"Server error!"});
        }
        
    }

    static async deleteItem(req,res){
        const itemId = req.params.id;
        if(!itemId) return res.status(400).json({message:"Id is required!"});

        try{
            const row = await query('SELECT * FROM tasks WHERE id = ? AND user_id = ?',[itemId,req.user.userId]);
            if(row.length === 0) return res.status(404).json({message:"Item not found!"});
            await query('DELETE FROM tasks WHERE id = ? AND user_id = ?',[itemId,req.user.userId]);
            res.status(200).json({message:"Item deleted."})
        } catch (err){
            console.log(err)
            res.status(500).json({message:"Server error!"});
        }
    }

}

module.exports = TasksController;