import React, { useEffect, useState } from 'react';
import "./home.css";
import axios from "axios";

import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import Header from '../../header/Header';
import { useLocation } from 'react-router-dom';


export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search} =useLocation();
  

  useEffect(()=>{
     const fetchPosts=async()=>{
     const res= await axios.get("/posts"+search)
     setPosts(res.data)
     }
     fetchPosts()
  },[search])
  return (
    <>
       <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
  )
}
