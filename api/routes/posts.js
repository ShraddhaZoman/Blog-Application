const router=require("express").Router();
const User=require("../models/Users");
const bcrypt=require("bcrypt");
const Post = require("../models/Posts");

//create new post
router.post("/",async(req,res)=>{
    const newPost= new Post(req.body);
    try {
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//udate
router.put("/:id",async(req,res)=>{
   try {
     const post= await Post.findById(req.params.id);
     if (post.username=== req.body.username)
        {
     try { 
       const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
        $set:req.body
       },{new:true});
     res.status(200).json(updatedPost);
     } catch (err) {
        res.status(500).json(err);
     }
    }else
    {
        res.status(401).json("You can update only your posts");
    }
   } catch (err) {
     res.status(500).json(err);
   }
})

//delete
router.delete("/:id",async(req,res)=>{
    try {
      const post= await Post.findById(req.params.id);
      if (post.username === req.body.username)
         {
      try { 
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post deleted.........");
      } catch (err) {
         res.status(500).json(err);
      }
     }else
     {
         res.status(401).json("You can delete only your posts");
     }
    } catch (err) {
      res.status(500).json(err);
    }
 });
 
 //getpost
 router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
 });

 //getallpost
 router.get("/",async(req,res)=>{
    
    const username=req.query.user;
    const catname=req.query.cat;
    
    try{
        let posts;
        if(username){
            posts=await Post.find({username})
        }
        else if(catname){
            posts=await Post.find({categories:{
                $in:[catname]
            }})
        }
        else
        {
            posts= await Post.find();
        }
        res.status(200).json(posts);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
 });

 
   module.exports= router;