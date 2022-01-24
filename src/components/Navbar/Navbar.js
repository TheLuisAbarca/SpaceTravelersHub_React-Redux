import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Rockets</NavLink>
      <NavLink to="/missions" activeClassName="active">Missions</NavLink>
      <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
    </nav>
  );
}

export default Navbar;
