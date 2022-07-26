const express = require("express");
const User = require('../models/userModel');

const Controllers = require('../Controllers/userControllers')
const user = express.Router();

user.post("/signup" , Controllers.signUp );
user.post("/login" , Controllers.login);



module.exports = user;