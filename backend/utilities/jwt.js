const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAccessToken =  (payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"})
}

const getRefreshToken =  (payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:"15m"})
}

const verifyToken =  (token,secret=process.env.REFRESH_TOKEN_SECRET)=>{
    try {
        const decoded = jwt.verify(token,secret);
        return decoded;
    }
    catch (e){
        console.log(e.message)
    }

}


module.exports = {getAccessToken,getRefreshToken,verifyToken}