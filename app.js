const express  = require('express');
const app = express();
const port = 8001;
const user = require('./Routes/user');
const books = require('./Routes/Books');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
require("dotenv").config();
require("./db/connection")
//--------------------------
// // middlewares
app.use(express.json()); 

app.use(cors())
app.use('/Uploads', express.static('Uploads'));

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// //--------------------------

// const db = 'mongodb+srv://myChatapp:NtxksWb5Eken1FIi@cluster0.1nbnl.mongodb.net/Deltax?retryWrites=true&w=majority'

// mongoose.connect(db , {
    
// }).then(() => {
//     console.log(`connection successfull`);
// }).catch((e) => {
//     console.log(`connection unsuccessfull`);
// })


//-------------------------
// //  route
 app.use("/api/v1/users" ,user)
 app.use("/api/v1/books", books);
 


 app.get("/test" ,  async(req , res)=>{
     //console.log(req.headers.host);
    console.log(`hi ${req.body} `)
 }),

 //------------------------
 // connect to port
app.listen(port, (req ,res)=>{
    console.log(`server started at ${port} & `)
})