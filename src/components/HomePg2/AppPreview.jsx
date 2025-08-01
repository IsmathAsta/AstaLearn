import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/corp.jpg";
import img2 from "../../assets/welcomeimg.webp";
import img3 from "../../assets/welcomeimg.webp";

export default function AppPreview(){
  const data = [
      {
        title: "Real-world skill development",
        desc: "Role Play is the AI way for learners to practice their communication skills. Role Play’s conversation coaching and real-time feedback is in hundreds of Udemy courses. Plus, create your own Role Plays so employees can practice skills specific to your business.",
        image: img1,
      },
      {
        title: "AI-powered coaching",
        desc: "Boost confidence and clarity with interactive, guided AI coaching that mimics real business scenarios. Perfect for onboarding, sales, and leadership training.",
        image: img2,
      },
      {
        title: "Measurable performance",
        desc: "Track learning outcomes and behavioral growth with smart analytics and reporting built into every interaction.",
        image: img3,
      },
    ];
    return(
        <>
        <Container className="my-5">
        {data.map((item, index) => (
          <Row
            key={index}
            className="overflow-hidden mb-5"
            style={{
              borderRadius: '20px',
            }}>
            
            <Col
              md={5}
              className="d-flex align-items-center"
              style={{
                backgroundColor: '#f8f9fa',
                padding: '40px',
              }}
            >
              <div>
                <h3 className="fw-bold mb-3">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            </Col>

           
            <Col md={7} className="p-0">
              <img
                src={item.image}
                alt="feature"
                className="img-fluid h-100 w-100 rounded-4"

              />
            </Col>
          </Row>
        ))}
      </Container>

        </>
    )
}