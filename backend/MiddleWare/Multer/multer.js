import multer from "multer";

// const storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./productUpload");
//     },
//     filename:(req,file,callback)=>{
//         const filename=`image-${Date.now()}.${file.originalname}}`;
//         callback(null,filename)
//     }
// });

// const filefilter=(req,file,callback)=>{
//     if(file.mimetype==="image/png"||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
//         callback(null,true)
//     }else{
//         callback(null,false)
//     }
// }

// const userUpload=multer({
//     storage,
//     filefilter
// })


// export default userUpload;

const storage=multer.memoryStorage();
export const singleUpload=multer({storage}).single("file");