import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { ApiError } from "../../Util/ApiError.js"

 const verifyAdmin= (req,res,next)=>{
   try {
      console.log("req.cookie.token",req.cookie.token)
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
export default verifyAdmin;