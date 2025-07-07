import { Button, Col, Container, Row } from "react-bootstrap";
import trained from "../../assets/sucess.png";
import student from "../../assets/rate.png";
import statistic from "../../assets/stat.png";
import community from "../../assets/comm.png"

function Community() {
    const statsData = [
        {
            image: trained,
            value: '15k',
            label: 'Successfully Trained',
        },
        {
            image: student,
            value: '60k',
            label: 'Students Enrolled',
        },
        {
            image: statistic,
            value: '80k',
            label: 'Satisfaction Rate',
        },
        {
            image: community,
            value: '330k',
            label: 'Students Community',
        },
    ];
    return (
        <div className="stats-bg">
            <Container className="text-center py-5 mt-5">
                <Row className="justify-content-center g-4">
                    {statsData.map((stat, index) => (
                        <Col key={index} xs={6} md={3}>
                            <img src={stat.image} alt={stat.label} className="stat-icon" />
                            <h2 className="stat-number mt-2">{stat.value}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* <div className="community-wrapper ">
                <Row className="pb-5 pt-4">
                    <Col md={4}>
                        <div className="course-container">
                            <img src={online} alt="online_img" />
                            <h4>15+ Online Courses</h4>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="student-container">
                            <img src={student} alt="online_img" />
                            <h4>300K+ Student Enrolled</h4>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="certificate-container">
                            <img src={certificate} alt="online_img" />
                            <h4>Online Certifications</h4>
                        </div>
                    </Col>
                </Row>
                <div className="mt-5">
                    <Row>
                        <Col md={6}>
                            <img src={aboutus} alt="about us" className="aboutus-img " />
                        </Col>

                        
                        <Col md={6} >
                            <p style={{ color: '#00bcd4', fontWeight: 'bold', marginBottom: '15px' }}>ABOUT US</p>
                            <h2 className="fw-bold mb-4" >Welcome to LEARNING APP</h2>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.</p>

                            <Row  className="mb-4">
                                <Col xs={6}>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li>Skilled Instructors</li>
                                        <li>International Certificate</li>
                                        <li>Online Classes</li>
                                    </ul>
                                </Col>
                                <Col xs={6}>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li>Online Classes</li>
                                        <li>Skilled Instructors</li>
                                        <li>International Certificate</li>
                                    </ul>
                                </Col>
                            </Row>

                            <Button style={{ backgroundColor: '#00bcd4', border: 'none', marginTop: '10px' }}>Read More</Button>
                        </Col>

                    </Row>
                </div>
            </div> */}
            {/* <h1 className="text-center">Explore Our Community!</h1>
                <div className="blue-line"></div>
                <div className="sm-list">
                    <div className="insta mb-5">
                        <i className="fa-brands fa-instagram me-2"></i>
                        <span>Instagram</span>

                    </div>
                    <div className="insta mb-5">
                        <i className="fa-brands fa-youtube me-2"></i>
                        <span>Youtube</span>

                    </div>
                    <div className="insta mb-5">
                        <i className="fa-brands fa-discord me-2"></i>
                        <span>Discord</span>

                    </div>
                    <div className="insta mb-5">
                        <i className="fa-brands fa-google-play me-2"></i>
                        <span>Playstore</span>

                    </div>
                    <div className="insta mb-5">
                        <i className="fa-brands fa-apple me-2"></i>
                        <span>Appstore</span>

                    </div>
                </div>
            </div>
            <Container>
                <div className="corporate-wrapper mb-5">
                    <Row>
                        <Col md={6}>
                            <div className="training-img-wrapper">
                                <img src={trainingImg} alt="Training" className="img-fluid training-img" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h2 className="training-title text-center">
                                Corporate Training: Master<br />
                                Java, Spring Boot,<br />
                                Microservices, and Hibernate
                            </h2>
                            <p className="training-desc">
                                Elevate your team's skills with expert-led training in the latest Java technologies.
                                Our tailored curriculum, experienced instructors, and hands-on learning approach
                                will ensure your team is equipped to excel in today’s competitive landscape.
                                Invest in your team’s future and contact us today to schedule a consultation.
                            </p>
                            <div className="d-flex justify-content-center mt-3">
                                <Button className="contact-btn">Contact Us</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container> */}
        </div>
    )
}
export default Community;