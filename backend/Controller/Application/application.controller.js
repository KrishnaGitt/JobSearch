import { Application } from "../../Model/application.model"
import { ApiError } from "../../Util/ApiError.js";
import { Job } from "../../Model/job.model.js"

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            throw new ApiError(400, "Job Id not Found")
        }
        const jobExits = await Job.findById(jobId);
        if (!jobExits) {
            throw new ApiError(400, "No job Found with the given id")
        }
        //check if the user existed already
        const existing = await Application.findOne({ job: jobId, applicant: userId })
        if (existing) {
            throw new ApiError(400, "this Job is Applied Already")
        }
        const newApplication = await Application.create({ job: jobId, applicant: userId })
        if (!newApplication) {
            throw new ApiError(400, "not able to create job")
        }
        jobExits.push(newApplication._id);
        await job.save();
        res.status(200).json({
            message: "Application Sumbitted Successfully",
            sucess: true
        })
    } catch (error) {
        res.status(400).json({
            meessage: error.meessage,
            sucess: false
        })
    }
}

export const getAppliedJob = async (req, res) => {
    try {
        const userId = req.userId;
        const application = await Application.find({ applicant: userId });
        if (!application) {
            throw new ApiError(400, "Not able to find the application with the given user");
        }
        res.status(200).json({
            message: "Application fetched sucessfully",
            sucess: true,
            application
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,

        })
    }
}

export const updateJobStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            throw new ApiError(400, "Please enter the status");
        };
        const getApplication = await Application.findById(applicationId);
        if (!getApplication) {
            throw new ApiError(400, "Not able to find the Application with the given id");
        };
        getApplication.status = status.toLowerCase();
        await getApplication.save();
        res.status(200).json({
            message: error.messsage,
            sucess: true,
            getApplication
        })
    } catch (error) {
        res.status(400).json({
            message: error.meessage,
            sucess: false,

        })
    }
}