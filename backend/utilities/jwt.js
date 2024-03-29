const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const getRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const verifyToken = (token, secret = process.env.REFRESH_TOKEN_SECRET) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (e) {
    console.log(e.message);
    throw new Error(e);
  }
};

module.exports = { getAccessToken, getRefreshToken, verifyToken };
