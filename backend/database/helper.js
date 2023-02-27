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
  const query_str = `INSERT INTO ${table} (${keys.toString()}) VALUES (?);`;

  
  try {
    await query(query_str, [values]);
    return { error: null, result: "Item inserted" };
  } catch (error) {
	console.log(error);
    return { error: error.sqlMessage, result: null };
  }
};

const updateItem = async (table, id, data) => {
  const values = Object.values(data);
  const columns = Object.keys(data).map((key) => `${key}=?`).join(',');

  const query_str = `UPDATE ${table} SET ${columns} WHERE id=? `;
  try {
    await query(query_str,[values,id]);
    return { error: null, result: "Item updated" };
  } catch (error) {
    return { error: error.sqlMessage };
  }
};

const deleteItem = async (table, id) => {
  const query_str = {
    text: `DELETE FROM ${table} WHERE id=$1 `,
    values: [id],
  };
  try {
    const { rowCount } = await pool.query_str(query_str);
    return { error: null, result: rowCount };
  } catch (error) {
    return { error: error.message };
  }
};

const getItem = async (table, option) => {
  const value = Object.values(option);
  const key = Object.keys(option)[0];
  const query_str = `SELECT * FROM ${table} WHERE ${key}=?`;

  try {
    const rows = await query(query_str, value);
    return { error: null, result: rows };
  } catch (error) {
    return { error: error.message };
  }
};

const getItems = async (table, condition = null) => {
  const value = condition ? Object.values(condition) : null;
  const key = condition ? Object.keys(condition).toString() : null;
  const query_str = !condition
    ? { text: `SELECT * FROM ${table}` }
    : {
        text: `SELECT * FROM ${table} WHERE "${key}"=$1 `,
        values: value,
      };
  try {
    const { rows } = await pool.query(query_str);
    return { error: null, result: rows };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  createItem,
  updateItem,
  getItem,
  getItems,
  deleteItem,
};
