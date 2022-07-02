import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./common.css"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
   
    const navigate = useNavigate()
    
  
  return (
   <div className="navbar">
     <Link to="/" >Home</Link>
     <Link to="/Login">Login</Link>
     <Link to="/profile"> smaple</Link>
   
     
   </div> 
  )
}

export default Navbar