import mongoose from "mongoose"
const Connection=()=>{
    mongoose.connect("url",()=>{
        console.log("database is connected")
    })
}

export default Connection