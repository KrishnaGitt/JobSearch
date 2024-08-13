import mongoose from "mongoose"
const Connection=()=>{
    const url='mongodb://127.0.0.1:27017/Ecommerce'
    mongoose.connect(url).then(()=>{
        console.log("database is connected")
})
}

export default Connection