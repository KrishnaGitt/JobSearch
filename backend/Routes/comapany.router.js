import express from "express"
import{registorCompany,getCompany,getCompanyById,updateCompany} from "../Controller/Company/company.controller.js"
const router=express.Router();

router.route("/comapny/registor").post(registorCompany)


export default router;