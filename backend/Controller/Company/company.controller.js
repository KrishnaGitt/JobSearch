import { Company } from "../../Model/company.model.js";
import { ApiError } from "../../Util/ApiError.js";

export const registorCompany=async (req,res)=>{
const {name} =req.body;
try {
    if(!name){
        throw new ApiError(400,"Please enter the company name")
    }
    const checkCompany=await Company.findOne({name});
    if(checkCompany){
        throw new ApiError(200,"You cannot same company")
    }
    const company =await Company.create({name})
    if(!company){
        throw new ApiError(400,"Failed to create company")
    }
    res.status(201).json({
        message:"Company Registered successfully",
        sucess:true
    })
} catch (error) {
    res.status(400).json({
        message:error.message,
        sucess:false
    })
}
}

export const getCompany=async(req,res)=>{
    try {
        const user=req.userId;
        const company=await Company.find({user});
        if(!company){
            throw new ApiError(400,"not able to find the company");
        }
        res.status(200).json({
            message:"Company fetched sucessfully",
            sucess: false,
            company
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            sucess:false
        })
    }
}

export const getCompanyById=async(req,res)=>{
    try {
        const companyId=req.parms.id;
        const company=await Company.findById(companyId);
        if(!company){
            throw new ApiError(400,"not able to find the company");
        }
        res.status(200).json({
            message:"Company fetched sucessfully",
            sucess: false,
            company
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            sucess:false
        })
    }
}

export const updateCompany=async(req,res)=>{
    try {
        const {name,description,website,location,logo}=req.body;
        const file=req.file;
        const updatedData= {name,description,website,location,logo};
        const company=await Company.findByIdAndUpdate(req.parms.id,updatedData,{new:true})
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