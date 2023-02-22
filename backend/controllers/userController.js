const pool = require('../database/connection');
const util = require('util')
const moment = require('moment');
const {hashPassword,comparePassword,getAccessToken,getRefreshToken,verifyToken,sendMail} = require('../utilities');

const query = util.promisify(pool.query).bind(pool);

class UserController {

  static async signUp(req,res){
    const {email,password} = req.body;
    const created_at = moment().format('YYYY-MM-DD HH:mm:ss');
    const hashedPassword = await hashPassword(password);

    try {

      // check if user already exists;
      const row = await query('SELECT id FROM users WHERE email = ?', [email]);
      if(row.length > 0 ) return res.status(409).json({message:"User already exists"});

      // add record if user does not already exist
      const results = await query('INSERT INTO users (email, password, created_at) VALUES (?,?,?)', [email,hashedPassword,created_at]);
      return res.status(201).json({message:"User created successfully"});

    } catch (err){
      res.status(500).json({message:"Server error!"});
      console.log(err)
    } 
   
  }
    
  static async signIn(req,res){
    const {email,password} = req.body;
    
    try{
      const row =  await query('SELECT * FROM users WHERE email = ?',[email]);
      if(row.length > 0){
        let match =  await comparePassword(password,row[0].password);
        if(match){
          let accessToken = getAccessToken({email:row[0].email});
          let refreshToken = getRefreshToken({email:row[0].email});

          await query('UPDATE users SET refresh_token = ? WHERE email = ?',[refreshToken,row[0].email]);
          res.cookie('jwt', refreshToken, { httpOnly: true , maxAge: 24*60*60*1000});
          res.status(200).json({accessToken});

        }else {
          res.status(401).json({message:"Invalid email or password"})
        }
      }else {
        res.status(401).json({message:"Invalid email or password!"})
      }
    } catch (e){
      console.log(e);
      res.status(500).json({message:"Server error!"});
    }

  }
  static async refreshToken(req,res){
    const cookies = req.cookies;
    if(cookies?.jwt){
      const {jwt} = req.cookies;
      const result = await query('SELECT * FROM users WHERE refresh_token = ?',[jwt]);
      const decoded = verifyToken(result[0].refresh_token);
      if(decoded?.email !== result[0].email) return res.status(403).json({message:"Error verifying token"});
      let accessToken = getAccessToken({email:result[0].email});
      return res.status(200).json({accessToken});
    }else{
      res.status(401);
    }
  }

  static async signOut(req,res){
    const cookies = req.cookies;
    if(cookies?.jwt){
      const {jwt} = req.cookies;
      const result = await query('SELECT * FROM users WHERE refresh_token = ?',[jwt]);
      if(!result){
        res.clearCookie('jwt',{httpOnly:true});
        return res.sendStatus(204);
      }

      const result1 = await query('UPDATE users set refresh_token = NULL WHERE id = ?',[result[0].id])
      res.clearCookie('jwt', { httpOnly: true});
      res.sendStatus(204);
      console.log(cookies);
    }else{
      res.sendStatus(204);
    }
  }

  static async sendPasswordResetEmail(req,res){
    const email = req.body.email;
    if(!email) return res.status(400).json("Email is required.");
    try{
      const user = await query('SELECT * FROM users WHERE email = ?',[email])
      if(user.length === 0) return res.status(401).json({message:"Account not found!"});
      const token = getAccessToken({email});
      await query('UPDATE users SET auth_token = ? WHERE email = ?',[token,email]);
      sendMail(email,token,(info)=>{
        console.log("Email sent successfully");
        res.status(200).json({message:"Email was sent successfully!"});
      })
    }catch (err){
      res.sendStatus(500);
    }
  }

  static async resetPassword(req,res){
    const {authorization} = req.headers;
    const {password} = req.body;
    const token = authorization.split(" ")[1];
    const hashedPassword = await hashPassword(password);
    try{
    
    const user = await query('SELECT * FROM users WHERE auth_token = ?',[token]);
  
    if(user.length === 0) return res.status(401).json({message:"Error setting password!"});

    const decoded =  verifyToken(token,process.env.ACCESS_TOKEN_SECRET);
    if(decoded.email !== user[0].email) return res.status(401).json({message:"Error setting password!"});
    
    await query('UPDATE users SET password = ? WHERE email = ?',[hashedPassword,user[0].email])
    return res.status(200).json({message:"Password updated successfully"});
    } catch (err){
      console.log(err);
      res.status(500).json({message:'Server error!'});
    }
      
  }
}

module.exports = UserController;