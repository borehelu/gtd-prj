const pool = require("../database/connection");

const createUser = (req, res) => {
  const sql = "INSERT INTO `users` SET ?";

  pool.query(sql, [req.body], (err, results) => {
    if (err) throw err;
    return res.json(results);
  });
};

module.exports = {
  createUser,
};
