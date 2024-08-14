import express from "express"
import{registorJob,getJob,getJobById,jobCreatedByAdmin} from "../Controller/Job/job.controller.js"
import verifyUser from "../MiddleWare/UserMiddleWare/verifyUser.js";
const router=express.Router();

router.route("/job/registor").post(verifyUser,registorJob);
router.route("/job/getJob").get(getJob);
router.route("/job/getJobById/:id").get(getJobById);
router.route("/job/jobCreatedByAdmin").get(jobCreatedByAdmin)


export default router;