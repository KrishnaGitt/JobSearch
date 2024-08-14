import express from "express";
import user from "./Routes/user.router.js";
import dotenv from "dotenv"
import Connection from "./DataBase/Connection.js";
import cookieParser from "cookie-parser";
dotenv.config({});
import router from "./Routes/comapany.router.js"
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",user);
const PORT =process.env.PORT||3000;
Connection();
app.listen(PORT,()=>{
    console.log(`app is listen on ${PORT}`);
});