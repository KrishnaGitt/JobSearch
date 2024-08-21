import express from "express";
import user from "./Routes/user.router.js";
import dotenv from "dotenv"
import Connection from "./DataBase/Connection.js";
import cookieParser from "cookie-parser";
dotenv.config({});
import company from "./Routes/comapany.router.js";
import job from "./Routes/Job.router.js";
import cors from "cors"
// import application  from "./Routes/application.router.js";
const app=express();
app.use(express.urlencoded({extended:true}));
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",user);
app.use("/api/v2",company);
app.use("/api/v3",job);
app.use("/api/v1", (req, res, next) => {
    console.log("API hit:", req.url);
    next();
});
// app.use("/api/v1",application)

const PORT =process.env.PORT||3000;
Connection();
app.listen(PORT,()=>{
    console.log(`app is listen on ${PORT}`);
});