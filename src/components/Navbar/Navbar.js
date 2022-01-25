import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeclassname="active">Rockets</NavLink>
      <NavLink to="/missions" activeclassname="active">Missions</NavLink>
      <NavLink to="/profile" activeclassname="active">My Profile</NavLink>
    </nav>
  );
}

export default Navbar;
