import {Job} from "../../Model/job.model.js"


export const registorJob=async (req,res)=>{
    const {title,description,requirement,
        location,jobType,position,salary,experience,company} =req.body;
        const updateData= {title,description,requirement,
            location,jobType,position,salary,experience,company,createdBy:req.userId}
    try {
        // if([title,description,requirement,
        //     location,jobType,position,salary,experience,company].some((item)=>item.trim()==="")){
        //     throw new ApiError(400,"Please enter the required feilds");
        // };
        const job =await Job.create(updateData)
        if(!job){
            throw new ApiError(400,"Failed to create company")
        }
        res.status(201).json({
            message:"Company Registered successfully",
            sucess:true,
            job
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            sucess:false
        })
    }
    }
    
    export const getJob=async(req,res)=>{
        try {
            const keyword=req.query.keyword||"";
            const query={
                $or:[
                    {title:{$regex:keyword,$options:"i"}},
                    {description:{$regex:keyword,$options:"i"}}
                ]
            }
            const job=await Job.find(query);
            if(!job.length){
                console.log("aeeer",job)
                throw new ApiError(400,"Job Not Found");
            }
            res.status(200).json({
                message:"Job fetched sucessfully",
                sucess: false,
                job
            })
        } catch (error) {
            console.log("hello",error)
            res.status(400).json({
                message:error.message,
                sucess:false
            })
        }
    }
    
    export const getJobById=async(req,res)=>{
        try {
            const jobId=req.params.id;
            const job=await Job.findById(jobId);
            if(!job){
                throw new ApiError(400,"Job Not Found with the given Id");
            }
            res.status(200).json({
                message:"Job fetched sucessfully",
                sucess: false,
                job
            })
        } catch (error) {
            res.status(400).json({
                message:error.message,
                sucess:false
            })
        }
    }

    export const jobCreatedByAdmin=async(req,res)=>{
        try {
            const adminId= req.admin.id;
            const job=await Job.findById(adminId)
            if(!job){
                throw new ApiError(400,"No Job Found By Admin")
            }
            res.status(200).json({
                message:"Job Created By Admin",
                sucess:true,
                job
            })
        } catch (error) {
            res.status(400).json({
                message:error.message,
                sucess:false
            })
        }
    }

    export const updateJob=async(req,res)=>{
        try {
            const {name,description,website,location,logo}=req.body;
            const file=req.file;
            const updatedData= {name,description,website,location,logo};
            const company=await Job.findByIdAndUpdate(req.params.id,updatedData,{new:true})
            if(!company){
                throw new ApiError(400,"Failed to update records")
            }
            res.status(200).json({
                message:"Record Updated",
                sucess:true,
                company
            })
        } catch (error) {
            res.status(400).json({
                message:error.message,
                sucess:false
            })
        }
    }