// BOOKS MODEL
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    authors: [
        {
            type: String,
            required: true
        }
    ],
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;