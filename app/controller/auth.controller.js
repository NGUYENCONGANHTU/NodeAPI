const userService = require("../services/user.service");
const uid = require("uuid");
const createUser = (req, res) => {
  try {
    const body = {
      id: uid(),
      phone: req.body.phone,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: "10",
      lang: "en",
    };
    const repose = userService.register(body);
    if (repose) {
      res.status(201).json(repose);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" + error });
  }
};

const login = (req, res) => {
  try {
    const body = {
      name: req.body.name,
      password: req.body.password,
    };
    const repose = userService.login(body);
    if (repose) {
      res.status(201).json(repose);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" + error });
  }
};

module.exports = {
  login,
  createUser,
};
