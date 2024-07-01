import React, { useState } from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,seterror]=useState(false)
  const handlesubmit= async (e)=>{
    e.preventDefault();
    try{
      seterror(false);
    const res = await axios.post("/auth/register",{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
  } catch(err)
  {
    seterror(true);
  }
  };

  return (
    <div className="register">
        <span className="register-title">Register</span>
        <form  className="register-form" onSubmit={handlesubmit}>
            <label>Username</label>
            <input className="register-input" type="text" placeholder="Enter your username"
              onChange={u=>setUsername(u.target.value)}
            />
            <label>Email</label>
            <input className="register-input" type="email" placeholder="Enter your email"
             onChange={u=>setEmail(u.target.value)}
            />
            <label>Password</label>
            <input className="register-input" type="password" placeholder="Enter your password"
              onChange={u=>setPassword(u.target.value)}
            />
            <button className="register-button" type="submit">Register</button>
        </form>
        <button className="register-login">
        <Link className="link" to="/login">Login</Link>
        </button>
      {error && <span className="error-msg">Something went Wrong !!</span>}
    </div>
  );
}
