import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { ApiError } from "../../Util/ApiError"
dotenv.config({})

export const verifyUser= (req,res,next)=>{
   try {
     const token=req.cookie.token;
     if(!token){
        throw new ApiError(400,"please login")
     }
     const verifyToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECREAT)
     req.userId=verifyToken._id;
     next();
   } catch (error) {
     res.status(200).json({
        message:error.message,
        sucess:false
     })
   }
}