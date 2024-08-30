const dbConnection = require("../../database/connection_mysl");
const util = require("util");

// chỉ admin mới có quyền xem hết
const list = async (searchQuery) => {
  const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
  let url = await `SELECT * FROM books ORDER BY created_at DESC`;
  let param = [];
  if (searchQuery) {
    url = "SELECT * FROM books name LIKE ? ORDER BY created_at DESC";
    param = [`%${searchQuery}%`];
  }
  const result = await showDataSql(url, param);
  return result;
};

// list user books
const listBookUser = async (userId) => {
  const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
  const selectQuery = `SELECT * FROM books WHERE user_id = ?`;
  const results = await showDataSql(selectQuery, [userId]);
  return results;
};

const show = async (id) => {
  const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
  const selectQuery = "SELECT * FROM books WHERE id ? LIMIT 1";
  const results = await showDataSql(selectQuery, [id]);
  return results[0];
};
const add = async (data) => {
  const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
  const url = `INSERT INTO books SET ?`;
  await showDataSql(url, data);

  const selectQuery = "SELECT * FROM books ORDER BY created_at DESC LIMIT 1";
  const results = await showDataSql(selectQuery);
  return results[0];
};

const edit = async (id, data) => {
  const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
  const updateQuery = "UPDATE books SET ? WHERE id = ?";
  await showDataSql(updateQuery, [data, id]);

  const url = `SELECT * FROM books WHERE id = ? LIMIT 1`;
  const query = util.promisify(dbConnection.query).bind(dbConnection);
  const result = await query(url, [id]);
  return result[0];
};

const remove = async (id) => {
  try {
    const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
    const deleteQuery = "DELETE FROM books WHERE id = ?";
    await showDataSql(deleteQuery, [id]);
    return true;
  } catch (error) {
    throw new Error("remove err");
  }
};

module.exports = {
  list,
  add,
  edit,
  remove,
  show,
  listBookUser,
};
