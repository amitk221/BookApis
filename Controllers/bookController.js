const Books = require("../models/bookModel");
const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;
const auth = require("../middleware/auth")


// ------------------------------------------
// get single  book data
const getSingleBook = async (req, res) => {
  let id = await req.params.bookId.replace(/\n/g ,'')
  var booksData;
  let message = ''
  try {
    
   //   console.log("HH" , id);
       booksData = await Books.findOne({_id:id});
      console.log(booksData )
      message = 'Book details.'
    // }else{
    //    booksData = await Books.find({});
    //   message = "All books list."
    
   
    res.status(200).jsonp({
      status: "Success",
      message: message,
      data: booksData,
    });
  } catch (err) {
    // console.log("ll", err);
    res.status(400).jsonp({
      status: "failed",
      message: "Something went wrong!",
      error: err
    });
  }
};


// ------------------------------------------
// get list of all the books
const getAllBooks = async (req, res) => {
  var booksData;
 // let id = `"${req.params}"`;
  let message = ''
  try {

       booksData = await Books.find({});
      message = "All books list."

    res.status(200).jsonp({
      status: "Success",
      message: message,
      data: booksData,
    });
  } catch (err) {
    // console.log("ll", err);
    res.status(400).jsonp({
      status: "failed",
      message: "Something went wrong!",
      error: err
    });
  }
};

//---------------------------------------------
// add books in database
const addBook = async (req, res) => {
  try {
     console.log(req.body);

    const { book_name, book_author, book_pages, book_price , book_imageUrl} = req.body;
    const bookData = new Books({
      book_name,
      book_author,
      book_pages,
      book_price,
      book_imageUrl
    });
    let Data = await bookData.save();
    res.status(201).jsonp({
      status: "success",
      message: "Successfull created",
      data: Data,
    });
  } catch (err) {
  //  console.log("ll", err);
    res.status(400).jsonp({
      status: "failed",
      message: "Something went wrong!",
      data: [],
    });
  }
};




//---------------------------------------------
// update book details by id

const updateBookDetails = async (req, res) => {
  try {

    
    let id = req.params.bookId.replace(/\n/g ,'');
    const { book_name, book_author, book_pages, book_price  , book_imageUrl} = req.body;
  let bookData = await Books.findByIdAndUpdate(id ,{
    book_name, 
    book_author, 
    book_pages, 
    book_price , 
    book_imageUrl
    })

    res.status(201).jsonp({
      status: "success",
      message: `Successfull updated book details `,
      data: bookData,
    });
  } catch (err) {
  //  console.log("ll", err);
    res.status(400).jsonp({
      status: "failed",
      message: "Something went wrong!",
      data: [],
    });
  }
};


//-----------------------------------------------
// delete book details by id


const deleteBookDetails = async (req, res) => {
  try {
  
  let id = req.params.bookId.replace(/\n/g ,'');
  let booksData = await Books.findByIdAndDelete(id);
      
    res.status(200).jsonp({
      message : `book id ${id} is deleted`,
      status: "success",
      message: `Successfull ${id} deleted book details`,
      data: booksData,
    });
  } catch (err) {
  //  console.log("ll", err);
    res.status(400).jsonp({
      status: "failed",
      message: "Something went wrong!",
      data: {},
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBookDetails,
  deleteBookDetails,
};
