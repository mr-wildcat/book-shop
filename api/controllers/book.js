const Book = require("../models/book.js");

module.exports.getBooks = async function (req, res) {
    const books = await Book.find({});
    res.send({ books });
};

module.exports.getBook = async function (req, res) {
    const { id } = req.params;

    const book = await Book.find({ _id: id });
    res.send({ book: book[0] });
};