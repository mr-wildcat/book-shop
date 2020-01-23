const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/book.js');
const mongoose = require('mongoose');

const dbUrl = require('./config/default').dbUrl;
const dbName = require('./config/default').dbName;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRouter);

app.use((req, res, next) => {
    res.status(404).send("Not Found")
});

mongoose.connect(`${dbUrl}/${dbName}`, { useNewUrlParser: true }, (err) => {
    if (err) {
        return console.log(err);
    }
});

module.exports = app;
