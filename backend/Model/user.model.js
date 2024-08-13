import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bycrpt from "bcrypt"

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true
    },
    phone:{
        type:String,
        required:[true,"please enter your phone number"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter the password"]
    },
    role:{
        type:String,
        required:[true,"please select your role"],
        enum:["Student","Recruiter"]
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"company"
        },
        profilePhoto:{
            type:String,
            default:""
        }
    }

},{timestamps:true})

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        id:this._id
    },
    process.env.ACCESS_TOKEN_SECREAT,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
)
};
// userSchema.pre("save",async function(next){
//     if(!this,is)
// };
userSchema.methods.comparePassword= async function(password){
    return await bycrpt.compare(password,this.password)
};

userSchema.methods.checkRole=function(role){
    return role===this.role
};

export const User=mongoose.model("users",userSchema)
