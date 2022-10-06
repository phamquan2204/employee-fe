import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/Header.css';

function Header() {
  return (
    <div className="header mb-3 bg-primary pt-3 pb-3 text-light" >
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="text-light navbar-brand">Employee Management</NavLink>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="text-light nav-link">Home<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/employee" className="text-light nav-link">Employee Management</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header