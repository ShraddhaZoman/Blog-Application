const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const categoryRoute=require("./routes/categories");
const multer=require("multer");
const cors = require('cors');
const path = require("path");

app.use(cors({
    origin: ['http://localhost:3000', "https://deploy-mern-lwhq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")));


mongoose.connect(process.env.MONGO_URL,
    {
         
    }
).then(console.log("Connected to mongo")).catch((err)=>console.log(err));

const storage =multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,"images");
    },filename: (req,file,cb)=>
    {
        cb(null,req.body.name);
    },
});


const upload =multer({storage:storage});
app.post("/api/upload",upload.single("file"), (req,res)=>{
    res.status(200).json("File uploaded....");
});


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);


app.listen("5000",()=>{
    console.log("Backend is running");
});