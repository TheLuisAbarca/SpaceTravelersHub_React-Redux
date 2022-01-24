import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Rockets</Link>
      <Link to="/missions">Missions</Link>
      <Link to="/profile">My Profile</Link>
    </nav>
  );
}

export default Navbar;