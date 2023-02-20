const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAccessToken =  (payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"})
}

const getRefreshToken =  (payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:"15m"})
}

const verifyToken =  (token)=>{
    try {
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        return decoded;
    }
    catch (e){
        console.log(e);
    }

}


module.exports = {getAccessToken,getRefreshToken,verifyToken}