const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const bookRouter = require("./routers/boos.router");
const authenticateToken = require("./app/services/auth.service");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth/", authRouter);
app.use("/api/books/", authenticateToken, bookRouter);

const PORT = process.env.PORT_APP || 80080;
app.listen(PORT, () => {
  console.log(`server rung ${PORT}`);
});
