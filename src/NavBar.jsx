//  NavBar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand><img src="https://starsstrust.org/wp-content/themes/sss_trust/img/logo/sss_trust.jpg" alt data-pagespeed-url-hash="934479784" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="title justify-content-end">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;







