import express from "express"
import user from "./Routes/user.router.js"
import dotenv from "dotenv"
import Connection from "./DataBase/Connection.js"
dotenv.config({})
const app=express();
app.use("/api/v1",user);
const PORT =process.env.PORT||3000
Connection();
app.listen(PORT,()=>{
    console.log(`app is listen on ${PORT}`)
})