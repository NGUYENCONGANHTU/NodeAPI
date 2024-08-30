const express = require("express");
const router = express.Router();
const bookController = require("../app/controller/book.controller");

router.get("/", bookController.index);
router.get("/user", bookController.listBookByUser);
router.delete("/show/:id", bookController.showDetail);
router.post("/store", bookController.store);
router.put("/edit/:id", bookController.update);
router.delete("/delete/:id", bookController.remove);

module.exports = router;
