import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">AyannaSudoko</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/play" className={({ isActive }) => isActive ? "active" : ""}>Play</NavLink>
        <NavLink to="/instructions" className={({ isActive }) => isActive ? "active" : ""}>Instructions</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
