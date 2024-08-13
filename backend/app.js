import express from "express"
import router from "./Routes/user.js"
import dotenv from "dotenv"
import Connection from "./DataBase/Connection.js"
dotenv.config({})
const app=express();
// app.use(router);
const PORT =process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`app is listen on ${PORT}`)
})