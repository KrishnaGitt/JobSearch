import express from "express";
const router=express.Router();
import { applyJob,getAppliedJob,updateJobStatus } from "../Controller/Application/application.controller";
import verifyUser from "../MiddleWare/UserMiddleWare/verifyUser.js";
router.route("application/applyJob/:id").post(verifyUser,applyJob);
router.route("application/getAppliedJob/:id").get(verifyUser,getAppliedJob);
router.route("application/updateJobStatus/:id").post(verifyUser,updateJobStatus);

export default router;
