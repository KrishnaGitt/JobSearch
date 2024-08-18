import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    requirement:{
        type:String
    },
    location:{
        type:String
    },
    jobType:{
        type:String
    },
    position:{
        type:Number
    },
    salary:{
        type:Number
    },
    experience:{
        type:Number
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    application:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application"
    }]
})


export const Job=mongoose.model("job",jobSchema)