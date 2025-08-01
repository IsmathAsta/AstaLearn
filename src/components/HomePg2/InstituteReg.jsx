import React, { useState } from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import Img1 from "../../assets/reg.jpg";
import Img2 from "../../assets/reg2.webp";

export default function InstituteReg() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            icon: "fa-user-plus",
            title: "Easy Registration",
            desc: "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.The way that you teach — what you bring to it — is up to you.How we help you. We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.",
            image: Img1,
        },
        {
            icon: "fa-chalkboard-user",
            title: "Add Teachers & Courses",
            desc: "Easily onboard your team and content.",
            image: Img2,
        },
        {
            icon: "fa-user-graduate",
            title: "Invite Students",
            desc: "Send invites or let students self-register.",
            image: Img1,
        },
        {
            icon: "fa-rocket",
            title: "Launch & Track",
            desc: "Go live with classes, monitor everything in real time.",
            image: Img1,
        },
    ];

    return (
        <div className="register-process-section py-5 text-center">
            <h2 className="fw-bold mb-4">Get Started in 4 Simple Steps</h2>

            {/* Nav Tabs */}
            <Nav variant="tabs" className="justify-content-center mb-4 border-bottom-0 gap-5">
                {steps.map((step, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link
                            onClick={() => setActiveStep(index)}
                            active={activeStep === index}
                            className="fw-bold text-dark"
                        >
                            {step.title}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            {/* Step Cards */}
            <Container className="my-5">
                <Row
                    className="overflow-hidden my-4 rounded"
                    style={{
                        background: "#fff",
                        borderRadius: "20px",
                        margin: "0 10px",

                    }}
                >
                    {/* TEXT SECTION */}
                    <Col
                        md={6}
                        className="d-flex flex-column justify-content-center p-5 text-md-start text-center"
                        style={{ color: "#333" }}
                    >
                        <h3 className="fw-bold mb-3">{steps[activeStep].title}</h3>
                        <p className="text-muted">{steps[activeStep].desc}</p>
                    </Col>

                    <Col md={6} className="text-center">
                        <Image
                            src={steps[activeStep].image} 
                            rounded
                            alt={steps.title}
                            width={'80%'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
