const express = require("express");
const router = express.Router();
const userController = require("../app/controller/user.controller");

router.get("/user-info", userController.userInfo);
router.get("/", userController.listUser);
router.put("/update-profile", userController.update);

module.exports = router;
