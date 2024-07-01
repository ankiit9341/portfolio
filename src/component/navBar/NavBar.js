import React from 'react';
import logo from '../../asset/logo.png';
import './NavBar.css'
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
      <header className='header'>
        <nav className="navBAr">
          <img id='logo' src={logo} alt="logo" />
          <div className="nav-link-items">
            <Link className="nav-items">Home</Link>
            <Link className="nav-items">About</Link>
            <Link className="nav-items">Project</Link>
          </div>
          <button className='contactBtn'>
          <i class="fa-regular fa-address-card"></i> Contact Me
          </button>
        </nav>
      </header>
  )
}
