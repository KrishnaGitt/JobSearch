import express from "express"
const router=express.Router();
import{registor,login,updateProfile,logout} from "../Controller/User/userController.js"
import verifyUser from "../MiddleWare/UserMiddleWare/verifyUser.js";
import {testController} from "../Controller/User/userController.js"

router.route("/user/registor").post(registor);
router.route("/user/login").post(login);
router.route("/user/logout").post(logout);
router.route("/user/updateProfile").put(verifyUser,updateProfile);
router.route("/test").post(testController);



export default router;