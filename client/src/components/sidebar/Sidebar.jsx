import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cate,setCate]=useState([]);
  useEffect(()=>{
      const getCate=async ()=>{
        const res=await axios.get("/categories");
        setCate(res.data);
      };
      getCate();
  },[]);
  return (
    <div className="sidebar">
        <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1629105339532-791fe454238e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbGRpbmclMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D" alt=""/>
        <p>Write. Share. Inspire. Your stories, your voice – welcome to BlogSpot! </p>
        </div>
        <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span> 
         <ul className="sidebar-list">
            {cate.map(c=>(

              <Link to={`/?cate=${c.name}`} className="link" key={c._id}>
              <li className="sidebar-listitem">{c.name}</li>
              </Link>
              
            ))}
            </ul> 
        </div>
        <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span> 
        <div className="sidebar-social">
             <i className="sidebar-icon fa-brands fa-square-facebook"></i>
             <i className="sidebar-icon fa-brands fa-square-twitter"></i>
             <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
             <i className="sidebar-icon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}
