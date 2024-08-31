import About from "./About";
import { useState } from "react";
import {LOGO} from "../utils/constant"
import { Link } from "react-router-dom";

const Heading=()=>{
    const [btnreact,setbtnreact]=useState("login");
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" style={{width:"5vw"}} src={LOGO}/>  
        </div>
        <div className="nav-items">
            <ul className="list">
                <li>
                    Home</li>
                <li>
                <Link to={"/about"}>About</Link></li>
                <li>Contact</li>
                <button className="btn" onClick={()=>{
                    btnreact=="login"?setbtnreact("logout"):setbtnreact("login");
                }}>{btnreact}</button>
            </ul>
        </div>
    </div>
    
)};

export default Heading;