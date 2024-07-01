import React, { useContext, useEffect, useState } from 'react'
import "./singlepost.css"
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import { Context } from "../../context/Context";

export default function Singlepost() {
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const [post, setPost]=useState({})
  const PF = "http://localhost:5000/images/";
  const {user }=useContext(Context);
  const [title ,setTitle]= useState("")
  const [desc ,setDesc]= useState("")
  const [updatedmode, setUpdatedmode]=useState(false)

  useEffect(()=>{
   const getPost= async()=>{
    const res= await axios.get("/posts/" + path);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
   };
   getPost();
  },[path]);

  const handledelete=async()=>{
    try{
   await axios.delete(`/posts/${post._id}`,
    { data: {username:user.username}});
    window.location.replace("/");
    }catch(err){

    }
  };

  const handleupdate=async()=>{
    try{
     await axios.put(`/posts/${post._id}`,
      {
        username:user.username,
        title,
        desc,
      }
     );
      setUpdatedmode(false);
    }
    catch(err){

    }
  };
  return (
    <div className="singlepost">
        <div className="singlepost-wrapper">
          {post.photo &&(
          <img src={PF + post.photo} alt="" 
          className="singlepost-img"/>
          ) 
        }
        {
          updatedmode ?( <input type="text" value={title}
          className="singlepost-titleInput"
          autoFocus
          onChange={(e)=>setTitle(e.target.value)}
          />):(
            <h1 className="singlepost-title">
            {title}
            { post.username===user?.username &&(
            <div className="singlepost-edit">
            <i className="singlepost-icon fa-solid fa-pen-to-square"
            onClick={()=>setUpdatedmode(true)}></i>
            <i className="singlepost-icon fa-regular fa-trash-can" onClick={handledelete}></i>
            </div>
          )}
        </h1>
          )
        }
         
            <div className="singlepost-info">
                <span className="singlepost-author">Author: 
                  <Link to={`/?user=${post.username}`} className="link">
                  <b>{post.username}</b>
                  </Link>
                  </span> 
                <span className="singlepost-date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updatedmode ? (
              <textarea className="singlepost-describeInput"
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}/>
            ):(
            <p className="singlepost-describe">
            {desc}
            </p>)}
            { updatedmode && (
            <button className="singlepost-button" onClick={handleupdate}>Update</button>
            )}
            </div>
    </div>
  );
}
