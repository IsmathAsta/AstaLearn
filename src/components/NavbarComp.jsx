// src/components/Navbar.jsx

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../src/assets/logos.jpg'
function NavbarComp() {
  return (
    <Navbar expand="lg" sticky="top" className="py-3" style={{backgroundColor:'#333333',color:'black',boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <Container>
    
         <Navbar.Brand href="#" className="fw-bold text-light">
          <img
            src={logo}
            width='120'
            alt="Asta App Logo"
           
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="telusko-navbar" />

      
        <Navbar.Collapse id="telusko-navbar" className="justify-content-end">
          <Nav className="ms-auto navsection" style={{gap:'25px'}}>
            <Nav.Link href="#career">Home</Nav.Link>
            <Nav.Link href="#ai">Aboutus</Nav.Link>
            <Nav.Link href="#blogs">Courses</Nav.Link>
            <Nav.Link href="#courses">Contact Us</Nav.Link>
            <Nav.Link href="#contact">Login</Nav.Link>
            <Nav.Link href="#login">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
