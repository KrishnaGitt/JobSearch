import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:[true,"please enter the company name"]
    },
    description:{
        type:String,
        required:false
    },
    website:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    logo:{
        type:String,
        required:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{timestamps:true})

export const  Company=mongoose.model("comapny",companySchema)