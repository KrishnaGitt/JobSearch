import express from "express"
const router=express.Router();
import{registor,login,updateProfile,logout} from "../Controller/User/userController.js"
import verifyUser from "../MiddleWare/UserMiddleWare/verifyUser.js";
import { singleUpload } from "../MiddleWare/Multer/multer.js";

router.route("/user/registor").post(singleUpload,registor);
router.route("/user/login").post(login);
router.route("/user/logout").post(logout);
router.route("/user/updateProfile").put(verifyUser,updateProfile);



export default router;