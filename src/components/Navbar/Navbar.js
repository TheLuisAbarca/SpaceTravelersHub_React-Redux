import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../images/space.png';

function NavbarSpace() {
  return (
    <Container fluid>
      <Navbar className="navbarMain" bg="light" expand="md">
        <Container>
          <Navbar.Brand className="navbarBrand" href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Space Logo"
            />
            {' '}
            Space Travelers&apos; Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="navlinks" activeclassname="active">Rockets</NavLink>
              <NavLink to="/missions" className="navlinks rborder" activeclassname="active">Missions</NavLink>
              <div><hr /></div>
              <NavLink to="/profile" className="navlinks" activeclassname="active">My Profile</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarSpace;
