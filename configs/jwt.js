const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hashPassword = (pass) => {
  try {
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hash(pass, salt);
    return hash;
  } catch (error) {
    throw new Error("err hashPassword");
  }
};

const generateToken = (info, key, timeEX) => {
  if (!info || !key || !timeEX) {
    throw new Error("Error: generateToken");
  }

  const token = jwt.sign(info, key, { expiresIn: timeEX });
  return token;
};

const verifyToken = (token, key) => {
  try {
    const decode = jwt.verify(token, key);
    return decode;
  } catch (error) {
    throw new Error("Error: verifyToken");
  }
};

module.exports = {
  verifyToken,
  generateToken,
};
