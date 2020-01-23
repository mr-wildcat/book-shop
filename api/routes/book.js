const express = require('express');
const bookController = require('../controllers/book.js');
const bookRouter = express.Router();

bookRouter.use("/:id", bookController.getBook);
bookRouter.use("/", bookController.getBooks);

module.exports = bookRouter;
