import { Link } from "react-router-dom";
import "./topbar.css"
import React, { useContext } from 'react'
import { Context } from "../../context/Context";

export default function Topbar() {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
   dispatch({type:"LOGOUT"});
  }

  const PF = "http://localhost:5000/images/";

  
  return (
    <div className="top">
      <div className="top-left">
      <i className="top-icon fa-brands fa-square-facebook"></i>
      <i className="top-icon fa-brands fa-square-twitter"></i>
      <i className="top-icon fa-brands fa-square-pinterest"></i>
      <i className="top-icon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="list-item">
          <Link to="/" className="link" >HOME</Link>
          </li>
          <li className="list-item">
          <Link to="/" className="link" >ABOUT</Link>
          </li>
          <li className="list-item">
          <Link to="/" className="link" >CONTACT</Link>
          </li>
          <li className="list-item">
          <Link to="/write" className="link" >WRITE</Link>
          </li>
          <li className="list-item" onClick={handleLogout}>{user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        { user?(
          <Link to="/settings" className="link">
            <img className="top-img"
            src={PF + user.profilePic}
            alt=""/>
            </Link>
          ):
          (
            <ul className="top-list">
              <li className="list-item">
              <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="list-item">
               <Link className="link" to="/register">REGISTER</Link>
               </li>
          </ul>
        )
        }
       
        <i className="top-searchicon fa-solid fa-magnifying-glass"></i>
      </div>
      </div>
  )
}
