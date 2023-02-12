import "../navbar/Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [cli, SetCli] = useState(false);
    const handleCli=()=> SetCli(!cli);
    const[color, setColor] = useState(false);
    const changeColor=()=>{
       if(window.scrollY >=100){
        setColor(true)
       }
       else{
        setColor(false)
       }
    };
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link> 
      <ul className={cli ?"nav active" : "nav"}>
        <li>
             <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/Project">Project</Link>
        </li>
        <li>
           <Link to="/About">About</Link>
        </li>
        <li>
           <Link to="/Contact">Contact</Link>
        </li>
      </ul>  
       <div className="hamburger" onClick={handleCli}>
        {cli ? (<FaTimes size={20} style={{color: "#fff"}} />):
        
        (<FaBars size={20} style={{color: "#fff"}} />)}
       </div>
    </div>
  )
}

export default Navbar