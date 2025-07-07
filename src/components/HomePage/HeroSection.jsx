// src/components/HeroSection.jsx

import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';

import teluskoImg from '../../assets/welcomeimg.webp';

function HeroSection() {
  return (
    <>

      <div className="hero-section text-white py-5 text-center">
        <Container>


          <h1 className="display-5 fw-bold pb-4 pt-5" style={{ fontSize: '60px' }}>Providing Best <br /> Education For <br /> Brighter future</h1>
          <p className="lead mt-3" style={{ color: '#fff' }}>
            Empower Yourself with the knowledge and skills gained<br /> through online learning! The key to your Future!
          </p>

          <Button style={{ backgroundColor: '#F24080', borderColor: '#F24080', borderRadius: '50px' }} className="mt-3 b-0 px-4 py-3">START LEARN</Button>

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
                    <i class="fa-solid fa-medal fa-2xl" style={{ color: "#f24080" }}></i>
                  </div>
                  <div className='txt-sec'>
                    <h5 className='fw-bold'>Certified Institute</h5>
                  </div>
                </div>
                <p>We partner only with officially verified and high-quality institutes.</p>
                

              </div>
            </Col>
            <Col md={3}>
            <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
              <div className='icon-txt d-flex gap-3 mb-3'>
                <div className='icon'>
                  <i class="fa-solid fa-user-tie fa-2xl" style={{ color: "#f24080" }}></i>
                </div>
                <div className='txt-sec'>
                  <h5 className='fw-bold'>Qualified Teacher</h5>
                </div>
              </div>
              <p>Learn from qualified, passionate instructors.</p>
              </div>
            </Col>
            <Col md={3}>
            <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
              <div className='icon-txt d-flex gap-3 mb-3'>
                <div className='icon'>
                  <i class="fa-solid fa-clock fa-2xl" style={{ color: "#f24080" }}></i>
                </div>
                <div className='txt-sec'>
                  <h5 className='fw-bold'>Flexible Learning</h5>
                </div>
              </div>
              <p>No deadlines. No pressure. Just pure learning freedom.</p>
              </div>
            </Col>
            <Col md={3}>
            <div className="why-box px-3 py-5 mb-4 rounded shadow-sm">
              <div className='icon-txt d-flex gap-3 mb-3'>
                <div className='icon'>
                  <i class="fa-solid fa-trophy fa-2xl" style={{ color: "#f24080" }}></i>
                </div>
                <div className='txt-sec'>
                  <h5 className='fw-bold'>Certificates & Rewards</h5>
                </div>
              </div>
              <p>Get certified and earn achievements that boost your career.</p>
              </div>
            </Col>

          </Row>
        </Container >
      </div >

    </>
  );
}

export default HeroSection;
