import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../src/assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer-wrapper text-dark pt-5 pb-4">
      <Container>
        <Row className="mb-4 text-center text-md-start pt-5">
          {/* Logo */}
          <Col md={4} className="mb-4 ">
            <img src={logo} alt="Logo" style={{ width: "50%" }} />
          </Col>

          {/*Quick Links */}
          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Career</a></li>
              <li><a href="#">Fee Payment Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Grievance Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>

          {/*Contact Info */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact</h5>
            <p><i className="fa fa-map-marker-alt" style={{color:'#000'}}></i> TamilNadu, India</p>
            <p><i className="fa fa-phone-alt" style={{color:'#000'}}></i> +918015267756, +919363917242</p>
            <p><i className="fa fa-envelope" style={{color:'#000'}}></i> admin@yourmail.com, hr@yourmail.com</p>
          </Col>
        </Row>

        {/* Social icons */}
        <div className="text-center mb-3">
          <a href="#"><i className="fab fa-instagram mx-3 fa-xl" style={{color:'#000'}}></i></a>
          <a href="#"><i className="fab fa-facebook mx-3 fa-xl" style={{color:'#000'}}></i></a>
          <a href="#"><i className="fab fa-linkedin mx-3 fa-xl" style={{color:'#000'}}></i></a>
          <a href="#"><i className="fab fa-whatsapp mx-3 fa-xl" style={{color:'#000'}}></i></a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="pb-3">
            Copyright © 2025 ASTAEDUTECH
          </p>
        </div>
      </Container>
    </footer>
  );
}
