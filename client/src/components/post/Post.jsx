import "./post.css"
import React from 'react'
import {Link} from "react-router-dom"
export default function Post({post}) {
  
  
  const PF = "http://localhost:5000/images/";
 

  
  return (
    <div className="post">
       {post.photo && <img className="post-img" 
       src={PF + post.photo} alt="" />}

       <div className="post-info">
        <div className="post-category">
          {post.categories.map((c)=>(
             <span className="post-cat">{c.name}</span>
          ))}         
        </div>
        <Link className="link" to={`/post/${post._id}`}>
        <span className="post-title">{post.title}</span>
        </Link>
        <hr/>
        <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
       </div>
       <p className="post-describe">
        {post.desc}
       </p>
    </div>
  )
}
