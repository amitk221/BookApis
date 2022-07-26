const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      require: true,
    },
    book_imageUrl: {
      type: String,
      require: true,
    },
    book_author: {
      type: String,
    },
    book_pages: {
      type: String,
      require: true,
    },
    book_price: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
