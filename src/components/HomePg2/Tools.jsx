import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Img from "../../assets/img.jpg";
import springAiImg from "../../assets/spring.jpg";
import javaSpringImg from "../../assets/java.jpg";
import welcome from "../../assets/welcomeimg.webp"
import { useNavigate } from "react-router-dom";

function Features() {
    const navigate = useNavigate();
    const handleCourseDetail = () => {
        navigate('/courseDetail')
    }
    const topics = [
        { title: "Science Research", icon: "fas fa-flask" },
        { title: "Web Development", icon: "fas fa-laptop-code" },
        { title: "UX/UI design", icon: "fas fa-pencil-ruler" },
        { title: "Music Composer", icon: "fas fa-music" },
        { title: "Business Consulting", icon: "fas fa-briefcase" },
        { title: "Marketing", icon: "fas fa-bullhorn" },
        { title: "IT Software", icon: "fas fa-network-wired" },
        { title: "Web Development", icon: "fas fa-code" },
    ];
    const categories = [
        { title: "Course Management", icon: "fas fa-book-open" },
        { title: "Live Class Integration", icon: "fas fa-video" },
        { title: "Teacher Dashboard", icon: "fas fa-chalkboard-user" },
        { title: "Student Enrollment", icon: "fas fa-user-plus" },
        { title: " Department Management", icon: "fas fa-building-columns" },
        { title: "Reports & Analytics", icon: "fa-chart-line" },
        { title: "Fees Management", icon: "fas fa-wallet" },
        { title: "Document Management", icon: "fas fa-file-alt" },
    ];
    return (
        <>
            <div className="categories-section py-5">
                <Container className="pb-5">
                    <div className="tools-header text-center pb-5">
                        <h1 className="fw-bold mb-4">Our Features At Glance</h1>
                        <div className="zigzag mx-auto"></div>
                    </div>

                    {/* Center: Category Cards */}

                    <Row className="g-3">
                        {categories.map((item, i) => (
                            <Col md={3} sm={6} xs={6} key={i}>
                                <div className="category-card text-center h-100">
                                    <div className="icon-bg mx-auto mb-2">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <h5 className="fw-bold mb-1 mt-4 fs-sm-6">{item.title}</h5>
                                    <p className="text-danger small">{item.semester}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="d-flex justify-content-center mt-5">
                        <Button
                            style={{ backgroundColor: '#F24080', borderColor: '#F24080', borderRadius: '50px' }}
                            className="px-4 py-3"
                        >
                            Start Learn
                        </Button>
                    </div>

                </Container>
            </div>

        </>
    );
}

export default Features;
