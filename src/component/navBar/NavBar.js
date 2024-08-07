import React from 'react';
import logo from '../../asset/logo.png';
import './NavBar.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">

      <Link className="navbar-brand" to="/">
        <img id='logo' src={logo} alt="logo" />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link " aria-current="page">About</Link>
          </li>
          <li className="nav-item">
            <Link to='skills' className="nav-link " aria-current="page" >Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link contact" style={{color:'black'}} aria-current="page" to="/contact"> Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
