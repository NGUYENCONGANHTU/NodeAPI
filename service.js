const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use("/api/auth/", authRouter);

const PORT = process.env.PORT_APP || 80080;
app.listen(PORT, () => {
  console.log(`server rung ${PORT}`);
});
