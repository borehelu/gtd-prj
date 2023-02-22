const {verifyToken} = require('../utilities');
const util = require('util')


const verifyJWT = (req,res,next)=>{
    const authorization = req.headers.authorization;
    if(!authorization) return res.status(401).json({message:"Authentication required!"});
    const token = authorization.split(" ")[1];
    try{
        const decoded = verifyToken(token,process.env.ACCESS_TOKEN_SECRET);
        if(decoded?.email){
            req.email = decoded.email;
            next();
        }
    }catch (err){
        res.sendStatus(403);
    }
   
}

module.exports = verifyJWT;