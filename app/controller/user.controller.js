const userService = require("../services/user.service");
const userInfo = async (req, res) => {
  try {
    if (req.user) {
      const books = await userService.userInfo(req.user.id);
      res.status(200).json(books);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" + error });
  }
};

const listUser = async (req, res) => {
  try {
    const books = await userService.listUser();
    res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" + error });
  }
};

const update = async (req, res) => {
  try {
    const user = req.user;
    if (user) {
      const updateData = req.body;
      const newData = await userService.updateProfile(user.id, updateData);
      res.status(200).json(newData);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error update book", error: error.message });
  }
};

module.exports = {
  userInfo,
  listUser,
  update,
};
