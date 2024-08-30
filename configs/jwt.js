const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Ensure this is correctly configured

const hashPassword = async (pass) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

const generateToken = (info, key, expiresIn) => {
  if (!info || !key || !expiresIn) {
    throw new Error("Error generating token");
  }
  return jwt.sign(info, key, { expiresIn });
};

const verifyToken = (token, key) => {
  try {
    return jwt.verify(token, key);
  } catch (error) {
    throw new Error("Error verifying token");
  }
};

module.exports = {
  verifyToken,
  generateToken,
  hashPassword,
};
