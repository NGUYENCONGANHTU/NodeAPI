const bookService = require("../services/book.services");
const { v4: uuidv4 } = require("uuid");
const index = async (req, res) => {
  try {
    const name = req.query.name || "";
    const books = await bookService.list(name);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error list book", error: error.message });
  }
};

const listBookByUser = async (req, res) => {
  try {
    if (req.user) {
      const books = await bookService.listBookUser(req.user.id);
      res.status(200).json(books);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error listBookByUser book", error: error.message });
  }
};

const store = async (req, res) => {
  try {
    if (req.user) {
      const newData = req.body;
      const book = await bookService.add({
        ...newData,
        user_id: req.user.id,
        id: uuidv4(),
        created_at: new Date(),
      });
      res.status(201).json(book);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding book", error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updateData = req.body;
    const books = await bookService.edit(bookId, updateData);
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error update book", error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const bookId = req.params.id;
    const books = await bookService.remove(bookId);
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error delete book", error: error.message });
  }
};

const showDetail = async (req, res) => {
  try {
    const bookId = req.params.id;
    const books = await bookService.show(bookId);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error show book", error: error.message });
  }
};

module.exports = {
  index,
  store,
  update,
  remove,
  listBookByUser,
  showDetail,
};
