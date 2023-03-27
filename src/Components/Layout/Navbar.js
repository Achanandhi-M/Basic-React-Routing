import React from "react";
import {NavLink ,Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div>
        <ul>
        <li>
           <NavLink to="/">About Me</NavLink> 
        </li>
        <li>
            <Link to="/Blogs">My Blogs</Link>
        </li>
        <li>
            <Link to="/Projects"> My Projects</Link>
        </li>
        <li>
            <Link to="/Login">Login</Link>
        </li>
        </ul>
        
        </div>
        
    )
}