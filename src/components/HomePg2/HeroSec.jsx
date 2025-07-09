// src/components/HeroSection.jsx

import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';

import teluskoImg from '../../assets/welcomeimg.webp';

function HeroSec() {
  return (
    <>

      <div className="hero-section text-light text-center">
        <Container>


              <h1 className="display-5 fw-bold pb-4 pt-5" style={{ fontSize: '60px' }}>Run Your Institute Online<br/> All in One Place</h1>
              <p className="lead mt-3" style={{ color: '#fff' }}>
                A powerful platform to help institutes publish courses, conduct live classes,<br/> and manage students with ease and more all from one easy-to-use platform.
              </p>

              <Button style={{ backgroundColor: '#F24080', borderColor: '#F24080', borderRadius: '50px' }} className="mt-3 b-0 px-4 py-3">Register Your Institute</Button>
           
            
        </Container>
      </div>

      {/**why choose us section */}
      <div className='whychoose-bg pt-5 pb-5'>
        <h1 className='fw-bold text-center mb-5'> What Makes Us Better</h1>
        <Container >
          <Row>
            <Col md={3}>
              <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
                <div className='icon-txt d-flex gap-3 mb-3 '>
                  <div className='icon'>
                    <i class="fa-solid fa-bolt fa-2xl" style={{ color: "#f24080" }}></i>
                  </div>
                  <div className='txt-sec'>
                    <h5 className='fw-bold'>Easy Setup</h5>
                  </div>
                </div>
                <p>Get started in minutes — no technical skills required.</p>


              </div>
            </Col>
            <Col md={3}>
              <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
                <div className='icon-txt d-flex gap-3 mb-3'>
                  <div className='icon'>
                    <i class="fa-solid fa-shield-halved fa-2xl" style={{ color: "#f24080" }}></i>
                  </div>
                  <div className='txt-sec'>
                    <h5 className='fw-bold'>Reliable and secure</h5>
                  </div>
                </div>
                <p>Your data is encrypted and our system is protected.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
                <div className='icon-txt d-flex gap-3 mb-3'>
                  <div className='icon'>
                    <i class="fa-solid fa-layer-group fa-2xl" style={{ color: "#f24080" }}></i>
                  </div>
                  <div className='txt-sec'>
                    <h5 className='fw-bold'>Scalable</h5>
                  </div>
                </div>
                <p>	Whether you're teaching, the platform grows with your needs.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
                <div className='icon-txt d-flex gap-3 mb-3'>
                  <div className='icon'>
                    <i class="fa-solid fa-headset fa-2xl" style={{ color: "#f24080" }}></i>
                  </div>
                  <div className='txt-sec'>
                    <h5 className='fw-bold'>Dedicated Support</h5>
                  </div>
                </div>
                <p>Our expert team is here 24/7 to support you every step of the way.</p>
              </div>
            </Col>

          </Row>
        </Container >
      </div >

    </>
  );
}

export default HeroSec;
