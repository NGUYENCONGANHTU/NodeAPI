const dbConnection = require("../../database/connection_mysl");
const dotenv = require("dotenv");
const auth = require("./../../configs/jwt");
const util = require("util");
dotenv.config();
const register = async (data) => {
  try {
    const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
    const url = await `INSERT INTO user SET ?`;
    dbConnection.query(url, data, (err, results) => {
      if (err) {
        return callback(err);
      }
      const query = `SELECT * FROM user ORDER BY created_at DESC`;
      const res = showDataSql(query);
      return res[0];
    });
  } catch (error) {
    throw new Error("user register err");
  }
};

const login = async (data) => {
  try {
    const url = `SELECT * FROM user WHERE email = ? LIMIT 1`;
    const query = util.promisify(dbConnection.query).bind(dbConnection);
    const result = await query(url, [data.email]);

    if (result[0]) {
      const tokenData = {
        id: result[0].id,
        email: result[0].email,
        name: result[0].name,
        phone: result[0].phone,
        lang: result[0].lang,
        role: result[0].role,
      };
      const token = auth.generateToken(tokenData, process.env.KEY_TOKEN, "24h");
      const userInfo = auth.verifyToken(token, process.env.KEY_TOKEN);
      return {
        status: 200,
        data: userInfo,
        token: token,
      };
    }
  } catch (error) {
    throw new Error("user register err");
  }
};

const userInfo = async (user_id) => {
  try {
    const url = `SELECT * FROM user WHERE id = ? LIMIT 1`;
    const query = util.promisify(dbConnection.query).bind(dbConnection);
    const result = await query(url, [user_id]);
    return result;
  } catch (error) {
    throw new Error("user userInfo err");
  }
};

const updateProfile = async (user_id, data) => {
  try {
    const showDataSql = util.promisify(dbConnection.query).bind(dbConnection);
    const updateQuery = "UPDATE user SET ? WHERE id = ?";
    await showDataSql(updateQuery, [data, id]);

    const url = `SELECT * FROM user WHERE id = ? LIMIT 1`;
    const query = util.promisify(dbConnection.query).bind(dbConnection);
    const result = await query(url, [id]);
    return result[0];
  } catch (error) {
    throw new Error("update userInfo err");
  }
};

const listUser = async () => {
  try {
    const url = `SELECT * FROM user`;
    const query = util.promisify(dbConnection.query).bind(dbConnection);
    const result = await query(url);
    return result;
  } catch (error) {
    throw new Error("user listUser err");
  }
};

module.exports = {
  updateProfile,
  register,
  userInfo,
};
