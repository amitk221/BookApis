const express = require("express");
const Controllers = require('../Controllers/bookController')
const books = express.Router();
const auth = require("../middleware/auth")


//-----------------------------------------------
//----------------- Routes----------------------

// get by id single book details or without id get all boo list
books.get("/Get/:bookId" , auth , Controllers.getSingleBook );
books.get("/GetAll" , auth , Controllers.getAllBooks );


//imageUpload.single('image') 
// add a new book
books.post("/Create"  , auth, Controllers.addBook );

// update book details by id
books.patch("/Update/:bookId" , auth, Controllers.updateBookDetails );

// delete a single book by id
books.delete("/delete/:bookId" , auth, Controllers.deleteBookDetails );



module.exports = books;