const pool = require("./connection");
const util = require("util");

const query = util.promisify(pool.query).bind(pool);

const getColumns = (data) => {
  let columns = "";

  data.forEach((e, i) => {
    if (i == data.length - 1) {
      columns += "?";
    } else {
      columns += "?,";
    }
  });
  return columns;
};

const createItem = async (table, data) => {
  const values = Object.values(data);
  const keys = Object.keys(data).map((val) => `${val}`);
  const query_str = `INSERT INTO \`${table}\` (${keys.toString()}) VALUES (?);`;

  try {
    const { insertId } = await query(query_str, [values]);
    return { error: null, result: "Item inserted", item_id: insertId };
  } catch (error) {
    console.log(error);
    return { error: error.sqlMessage, result: null };
  }
};

const updateItem = async (table, option, data) => {
  const values = Object.values(data);
  const c_values = Object.values(option);
  const columns = Object.keys(data)
    .map((key) => `${key}=?`)
    .join(",");
  const keys = Object.keys(option);
  let whereClause = "";
  if (keys.length === 1) {
    whereClause = keys.map((key) => `${key} = ?`);
  } else {
    whereClause = keys.map((key) => `${key}= ?`).join(" AND ");
  }
  const query_str = `UPDATE \`${table}\` SET ${columns} WHERE ${whereClause} `;

  try {
    const result = await query(query_str, [...values, ...c_values]);
    return { error: null, result: "Item updated" };
  } catch (error) {
    return { error: error.sqlMessage };
  }
};

const deleteItem = async (table, id) => {
  const query_str = `DELETE FROM \`${table}\` WHERE id=? `;
  try {
    await query(query_str, id);
    return { error: null, result: "Item deleted" };
  } catch (error) {
    return { error: error.message };
  }
};

const getItem = async (table, option, userQuery = "") => {
  const value = Object.values(option);
  const keys = Object.keys(option);
  let whereClause = "";
  let query_str = "";
  if (!userQuery) {
    if (keys.length === 1) {
      whereClause = keys.map((key) => `${key} = ?`);
    } else {
      whereClause = keys.map((key) => `${key}= ?`).join(" AND ");
    }
    query_str = `SELECT * FROM \`${table}\` WHERE ${whereClause} ORDER BY created_at desc`;
  } else {
    query_str = userQuery;
  }

  try {
    const rows = await query(query_str, value);
    return { error: null, result: rows };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  createItem,
  updateItem,
  getItem,
  deleteItem,
};
