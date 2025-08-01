// src/components/HeroSection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function HeroSec() {
  const features = [
    {
      icon: 'fa-bolt',
      title: 'Easy Setup',
      desc: 'Get started in minutes — no technical skills required.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Reliable and Secure',
      desc: 'Your data is encrypted and our system is protected.',
    },
    {
      icon: 'fa-layer-group',
      title: 'Scalable',
      desc: "Whether you're teaching, the platform grows with your needs.",
    },
    {
      icon: 'fa-headset',
      title: 'Dedicated Support',
      desc: 'Our expert team is here 24/7 to support you every step of the way.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Performance Tracking',
      desc: 'Track course progress, student growth, and performance easily.',
    },
    {
      icon: 'fa-mobile-screen-button',
      title: 'Mobile-Friendly',
      desc: 'Access your institute on any device, anytime, anywhere.',
    },
  ];

  

  return (
    <>
      <Container className="hero-section text-light text-center shadow mt-5">
        <Container>
          <h1 className="display-5 fw-bold pb-4 fs-sm-5">
            Run Your Institute Online<br /> All in One Place
          </h1>
          <p className="lead mt-3" style={{ color: '#fff' }}>
            A powerful platform to help institutes publish courses, conduct live classes,<br />
            and manage students with ease and more all from one easy-to-use platform.
          </p>
          <Button
            style={{ backgroundColor: '#F24080', borderColor: '#F24080', borderRadius: '50px' }}
            className="mt-3 b-0 px-4 py-3"
          >
            Register Your Institute
          </Button>
        </Container>
      </Container>

      {/** Why Choose Us section */}
      <div className="whychoose-bg pt-5 pb-5">
        <h1 className="fw-bold text-center mb-3">What Makes Us Better</h1>
        <Container className="py-5">
          <Row>
            {features.map((item, index) => (
              <Col sm={12} md={4} lg={2} key={index} className="text-center px-3 mb-4">
                <div className="feature-card px-3 py-5 mb-4 rounded shadow-sm h-100">
                  <div className="icon-txt  mb-3">
                    <i className={`fa-solid ${item.icon} fa-2xl`} style={{ color: '#f24080' }}></i>
                  </div>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small text-muted">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      

    </>
  );
}

export default HeroSec;
