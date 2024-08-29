import { User } from "../../Model/user.model.js"
import { ApiError } from "../../Util/ApiError.js";
import bcrypt from "bcrypt"

export const registor = async (req, res) => {
    console.log("in controller");
    try {
        const {
            fullName, email, phone, password, role
        } = req.body;
        //checking all the feilds
        if ([fullName, email, phone, password, role].some((item) =>
            item.trim() === "")) {
            throw new ApiError(400, "Some Field are empty:Registor")
        }
        //checking user if already exists
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            throw new ApiError(400, "user already existed")
        }
        //hashing the password
        const hashPassword = await bcrypt.hash(password, 10);
        //creating the user
        const createdUser = await User.create({
            fullName, email, phone, password: hashPassword, role
        })
        res.status(200).json({
            message: "User created sucessfully",
            sucess: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            sucess: false
        })
    }
}

export const login = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        //checkin all the feilds
        if ([email, password, role].some((feilds) => feilds === "")) {
            throw new ApiError(400, "Please enter login details")
        }
        //checking if user exist or not
        const checkUser = await User.findOne({ email })
        if (!checkUser) {
            throw new ApiError(400, "User doest not exits please create new")
        }
        //checking the password
        if (!checkUser.comparePassword(password)) {
            throw new ApiError(400, "please enter the correct password")
        }
        //checking the role correct or not
        if (!checkUser.checkRole) {
            throw new ApiError(400, "please enter the correct role")
        }
        const generatedAccessToken = checkUser.generateAccessToken()
        res.status(200).cookie("token", generatedAccessToken).json({
            message: "Sucessfully logged In",
            sucess: true,
            user: checkUser._id
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            sucess: false
        })
    }
}
export const logout = (req, res) => {
    try {
        res.status(200).clearCookie("token").json({
            message: "User Logout",
            sucess: true
        })
    } catch (error) {
        res.status(400).json({
            message: "not able to loggout"
        })
    }
}

export const updateProfile = async (req, res) => {
    console.log("update profile")
    try {
        const {
            fullName, email, phone, password, skills, bio
        } = req.body;
        const user = await User.findById(req.userId);
        if (!user) {
            throw new ApiError(400, "Please login")
        };
        if (fullName) user.fullName = fullName;
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (password) user.bio = bio;
        if (skills) user.skills = skills;
        if (bio) user.bio = bio;
        await user.save();
        res.status(200).json({
            message: "records updated",
            sucess: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            sucess: false
        })
    }
}

export const getAllUser = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const ITEM_PER_PAGE = 3;
        const skip = (page - 1) * ITEM_PER_PAGE;
        const count = await User.countDocuments();
        const countTotalPage = Math.ceil(count / ITEM_PER_PAGE);
        const getUsers = await User.find().limit(ITEM_PER_PAGE).skip(skip);

        res.status(200).json({
            getUsers,
            Pagination: {
                countTotalPage,
                count
            }
        })
    } catch (error) {
        console.log("error", error)
    }
}
export const testController = (req, res) => {
    console.log("hello testb api");
    res.status(200).json({
        message: "hello"
    })
}