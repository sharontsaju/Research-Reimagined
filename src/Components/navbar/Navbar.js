// Navbar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function CustomNavbar() {
  return (
    <Navbar bg="black" variant="dark" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">Research Reimagined</Navbar.Brand>
        <Nav className="ms-auto me-3">
          <Nav.Link href="#about-us" className="nav-link me-3">About Us</Nav.Link>
          <Nav.Link href="#home" className="nav-link me-3">Home</Nav.Link>
          <Nav.Link href="#features" className="nav-link me-3">Register</Nav.Link>
          <Nav.Link href="#pricing" className="nav-link">Log in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
