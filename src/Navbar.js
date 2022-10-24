import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  
  return(
<nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button className='nav-toggle'>
          <FaBars/>
        </button>
      </div>
      <div className="links-container">
        <ul className='links'>
          {links.map((item)=>{
            return(
              <li><NavLink style={({isActive})=>({color:isActive && "red"})} to={item.url}>{item.text}</NavLink></li>
            )
          })}
        </ul>
      </div>
      <ul className="social-icons">
          {social.map((i)=>{
            return(
              <li><a href={i.url}>{i.icon}</a></li>
            )
          })}
      </ul>
    </div>


</nav>

  ) 
}

export default Navbar