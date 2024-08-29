import axios from "axios";
import {USER_REGISTOR_API} from "../../Utils/Constant.js"
export const userRegistorApi=async (formData)=>{
    return await axios.post(`${USER_REGISTOR_API}`,formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials:true
    })
}
export const getAllUserApi=async(page)=>{
    console.log("hello")
    return await axios.get(`http://localhost:5000/api/v1/user/getAllUser?page=${page}`);
}
