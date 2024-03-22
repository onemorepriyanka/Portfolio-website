import React from 'react'
import './Navbar.css'
import logome from '../../assets/logo-me.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/phone-call.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logome} alt="" className="logo" />

        <div className="desktopMenu">
          <Link className='desktopMenuListItem'>Home</Link>
          <Link className='desktopMenuListItem'>About</Link>
          <Link className='desktopMenuListItem'>Portfolio</Link>
          <Link className='desktopMenuListItem'>Clients</Link>
        </div>

        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
        
    </nav>
  )
}

export default Navbar