import express from "express"
import{registorCompany,getCompany,getCompanyById,updateCompany} from "../Controller/Company/company.controller.js"
import verifyUser from "../MiddleWare/UserMiddleWare/verifyUser.js";
const router=express.Router();

router.route("/company/registor").post(verifyUser,registorCompany);
router.route("/company/getCompany").get(verifyUser,getCompany);
router.route("/company/getCompanyById/:id").get(getCompanyById);
router.route("/company/updateCompany").put(updateCompany)


export default router;