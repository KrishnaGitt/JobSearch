import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { ApiError } from "../../Util/ApiError.js"

 const verifyUser= (req,res,next)=>{
   try {
     const token=req.cookies.token;
     if(!token){
        throw new ApiError(400,"please login")
     }
     const verifyToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECREAT)
     console.log("verifyToken",verifyToken)
     console.log("verifyToken",verifyToken.id)
     req.userId=verifyToken.id;
     next();
   } catch (error) {
     res.status(200).json({
        message:error.message,
        sucess:false
     })
   }
}
export default verifyUser;