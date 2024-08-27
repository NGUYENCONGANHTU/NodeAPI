const dbConnection = require("../../database/connection_mysl");
const dotenv = require("dotenv");
const auth = require("./../../configs/jwt");

dotenv.config();
const register = (data) => {
  try {
    const query = `INSERT INTO user SET ?`;
    dbConnection.query(query, data, (err, results) => {
      if (err) {
        return callback(err);
      }
      const query = `SELECT * FROM user ORDER BY created_at DESC`;
      const res = dbConnection.query(query);
      return res;
    });
  } catch (error) {
    throw new Error("user register err");
  }
};

const login = (data) => {
  try {
    const query = `INSERT INTO user WHERE  ? LIMIT 1`;
    const result = dbConnection.query(query, data);
    if (result[0]) {
      const token = auth.generateToken(result[0], process.env.KEY_TOKEN, "24h");
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

module.exports = {
  login,
  register,
};
