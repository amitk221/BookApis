const Users = require('../models/userModel')
const mongoose = require('mongoose');
const auth = require("../middleware/auth");
var jwt = require('jsonwebtoken');
// login 

const login = async (req ,res)=>{
    const { email, password } = req.body;
    try{  
       let user= await Users.findOne({email:email});
       console.log(user);
        if(user.password === password){
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
        
          
            res.status(200).jsonp({
                status:"Success",
                message: "Successfull Logined!", 
                token:token
            })
        } else{
            res.status(401).jsonp({
                status:"Unauthorized",
                message: "Please provide correct email and password!", 
                data: []
            })
        }

    } catch(err){
        //console.log("ll" ,err);
        res.status(400).jsonp({
            status:"failed",
            message: "Something went wrong!", 
            err:err
        })
    }
} 

// signup
const signUp = async (req ,res)=>{
    try{
         const {  email, password } = req.body;
        const user = new Users({
            email : email,
            password  : password
          });
        let userRegistered =await user.save(); 
        const token = jwt.sign(
            { user_id: userRegistered._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
        res.status(201).jsonp({
            status:"success",
            message: "Successfull created", 
            data: userRegistered,
            token:token
        })

    } catch(err) {
        console.log("ll" ,err);
        res.status(400).jsonp({
            status:"failed",
            message: "Something went wrong!", 
            data: []
        })
    }
   
} 



module.exports = {
  
    signUp,
    login
}