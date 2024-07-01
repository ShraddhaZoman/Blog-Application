import React, { useContext, useState } from 'react'
import "./settings.css"
import Sidebar from '../../sidebar/Sidebar'
import { Context } from '../../../context/Context'
import axios from 'axios';


export default function Settings() {
  const { user , dispatch } =useContext(Context);
  const [file,setFile]=useState(null);
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("")
  const [success, setSuccess]=useState(false);

  const PF = "http://localhost:5000/images/";

  const handlesubmit= async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser={
     userId: user._id,
     username,
     email,
     password
    };
    if (file){
     const data= new FormData();
     const filename = Date.now() + file.name;
     data.append("name",filename);
     data.append("file",file);
     updatedUser.profilePic = filename;
     try {
      await axios.post("/upload",data);
      
     } catch (err) {
       
     }
   }
   try{
    const res = await axios.put("/users/" + user._id, updatedUser);
    setSuccess(true); 
    dispatch({type:"UPDATE_SUCCESS", payload: res.data});
  }catch(err){
    dispatch({type:"UPDATE_FAIL"});
  }
   };

  return (
    <div className="settings">
        <div className="settings-wrapper">
            <div className="settings-title">
             <span className="settings-updatetitle">
                Update your Account
             </span>
             <span className="settings-deletetitle">
                Delete your Account
             </span>
            </div>
            <form className="settings-form" onSubmit={handlesubmit}>
                <label> Profile Picture </label>
                <div className="settings-profile">
                    <img src={file ? URL.createObjectURL(file): PF+user.profilePic} alt=""/>
                    <label htmlFor="fileInput">
                    <i className="settings-icon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" 
                    style={{display:"none"}} 
                    onChange={(e)=> setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} 
                onChange={(e)=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" 
                onChange={(e)=>setPassword(e.target.value)}/>
                <button className="settings-submit" type="submit">Update</button>
                {success && <span style={{color:'green', textAlign:'center',marginTop:'20px'}}>Profile has been updated</span>}
            </form>
        </div>
            <Sidebar/>
    </div>
  )

}
