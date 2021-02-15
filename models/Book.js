const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  link: String,
  title: { 
    type: String, 
    required: true 
  },
  subtitle: {
    type: String
  },
  author: { 
    type: String, 
    required: true 
  },
  image: String,
  description: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
