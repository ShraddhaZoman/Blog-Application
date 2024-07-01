import React, { useContext, useRef } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import axios from 'axios';

export default function Login() {
  const userRef =useRef();
  const passwordRef=useRef();
  const { dispatch, isFetching}=useContext(Context);
  const handlesubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res= await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value
      });
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAIL"});
    }
  };

  return (
    <div className="login">
        <span className="login-title">Login</span>
        <form  className="login-form" onSubmit={handlesubmit}>
        <label>Username</label>
        <input className="login-input" type="text" placeholder="Enter your username"
        ref={userRef}/>
            <label>Password</label>
            <input className="login-input" type="password" placeholder="Enter your password"
            ref={passwordRef}/>
            <button className="login-button" type="submit"
            disabled={isFetching}>Login</button>
        </form>
        <button className="login-register">
        <Link to="/register" className="link">Register</Link>
        </button>
    </div>
  );
}
