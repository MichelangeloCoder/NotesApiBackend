/**
 * we have created model in which we have created note model.js and user model.js, we have imported mongoose*/

const mongoose = require("mongoose");
/*We have created UserSchema object and connect with mongoose and we have defined properties below (username,password,email) */
const UserSchema = mongoose.Schema({

    username : {
        type : String,
        required : true
    },
    password : {
       type : String,
       required : true 
    },
    email : {
        type : String,
        required : true 
     }
},{timestamps : true});/*timestamps property add two field created at and modified at*/

module.exports = mongoose.model("User",UserSchema);