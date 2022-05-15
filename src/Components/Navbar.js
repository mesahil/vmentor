import React from 'react'
import '../Styles/navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
        <a href='http://vmentor.ai/'>
            <img src='https://vansskilling.co.in/wp-content/uploads/2020/04/VMentor-Logo-1.png' alt='Vmentor'/>
        </a>
        <div className='navLink'>
          <NavLink to="/">Homepage</NavLink>&nbsp;&nbsp;
          <NavLink to="/addpost">Add Post</NavLink>&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default Navbar