import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </nav>
  );
}

export default Navbar;
