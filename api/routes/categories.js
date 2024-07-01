const router=require("express").Router();
const User=require("../models/Users");
const Cat=require("../models/Category");

router.post("/",async(req,res)=>{
    const newCategory =new Cat(req.body);
    try {
        const savedCategory= await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
       res.status(500).json(err); 
    }
});

//all categories
router.get("/",async(req,res)=>{
    try {
        const cats= await Cat.find();
        res.status(200).json(cats);
    } catch (err) {
       res.status(500).json(err); 
    }
});
module.exports= router;