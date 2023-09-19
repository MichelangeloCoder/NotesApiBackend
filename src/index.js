 /*Import express library in javascript */
 const express = require("express");
 /*application object created and express function called. */
 const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

/*Mongoose package imported */
const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());


 app.use("/users",userRouter);
 app.use("/note",noteRouter);
 /*get method is defined below req(request), res(response) object func called data send in response method */
 app.get("/",(req,res) =>{
    res.send("Notes API from Dev Production");
 });
 const PORT = process.env.PORT || 5000;
 /*Below code is the connection of mongoose db and we are connection port 5000 in then function */
 mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started at port no." + PORT);
    
     });
 })
 .catch((error)=>{
    console.log(error);
 })


