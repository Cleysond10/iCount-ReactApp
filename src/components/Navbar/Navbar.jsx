import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Navbar.Brand className="navTitle" as={Link} to="/">iCount</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navLink1">
          <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
          <Nav.Link className="navLink2" as={Link} to="/bonus">Bonus</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
