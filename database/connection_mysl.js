const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config(); // để lấy giái trị file .env em  nhé
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: "UTC",
});

connection.connect((err) => {
  if (err) {
    console.log("lỗi kết nối cơ sở dữ liệu", err.stack);
    return;
  }
  console.log("kết nối thành công");
});

module.exports = connection;
