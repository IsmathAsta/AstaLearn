import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Img from "../../assets/img.jpg";
import springAiImg from "../../assets/spring.jpg";
import javaSpringImg from "../../assets/java.jpg";
import welcome from "../../assets/welcomeimg.webp"
import { useNavigate } from "react-router-dom";

function Course() {
  const navigate = useNavigate();
  const handleCourseDetail=()=>{
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
 { title: "Science Research", icon: "fas fa-flask" },
    { title: "Web Development", icon: "fas fa-laptop-code" },
    { title: "UX/UI design", icon: "fas fa-pencil-ruler" },
    // { title: "Music Composer", icon: "fas fa-music" },
    // { title: "Business Consulting", icon: "fas fa-briefcase" },
    { title: "Marketing", icon: "fas fa-bullhorn" },
    { title: "IT Software", icon: "fas fa-network-wired" },
    { title: "Web Development", icon: "fas fa-code" },
];
  const courses = [
    {
      title: "Starting SEO as your Home Based Business",
      image: Img,
      price: "$30",
      instructor:'James Pandian'
    },
    {
      title: "Grow Personal Financial Security Thinking &...",
      image: Img,
      price: "$49",
      instructor:'Willaim Kings'
    },
    {
      title: "The Complete Guide to Build RESTful API...",
      image: Img,
      price: "Free",
      instructor:'Akash'
    },
    {
      title: "Competitive Strategy Law for Management...",
      image: Img,
      price: "$75",
      instructor:'Dr.Angelina'
    },
  ];

  return (
    <>
      {/* <div className="topics-section pb-5">
        <Container className="p-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12">

              <h2 className="fw-bold heading-highlight text-center">Top <span>Categories</span></h2>
              <p className="fw-bold text-center">You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            {/* <div className="col-md-6 text-end">
            <p className="text-muted">Lorem ipsum dolor sit amet Susspendriet.</p>
            <a href="#" className="fw-bold">View All Topics <i className="fas fa-arrow-right"></i></a>
          </div> 
          </div>

          <div className="row mt-4">
            {topics.map((item, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className={`topic-card ${item.active ? "active" : ""}`}>
                  <div className="icon-circle">
                    <i className={item.icon}></i>
                  </div>
                  <p className="course-count">12 Courses</p>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <div className="popular-course">
          <p className="text-success fw-bold text-center">POPULAR COURSES</p>
          <h2 className="fw-bold heading-highlight text-center">Pick A Course To Get Started</h2>
          <div className="container py-5">
            <div className="row">
              {courses.map((course, index) => (
                <div className="col-md-3 col-sm-6 mb-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm pop-course">
                    <img src={course.image} className="card-img-top" alt={course.title} />
                    <div className="card-body text-center">
                      <h6 className="card-title mb-2">{course.title}</h6>
                      <p className="text-danger fw-bold">{course.price}</p>
                      <button className="btn enroll btn-sm w-100" onClick={handleCourseDetail}>Enroll Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center pb-3">
            <button className="btn btn-teal">
              Browse more courses <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>

        </div>
      </div> */}
      <div className="categories-section py-5">
      <Container>
        <Row>
          {/* Left section with heading */}
          <Col md={3} className="text-md-start text-center mb-4 mb-md-0 pt-3">
            <div className="zigzag mb-2"></div>
            <h1 className="fw-bold mb-4">Our Best <br /> Categories</h1>
            <Button className="more-btn">MORE CATEGORIES</Button>
          </Col>

          {/* Center: Category Cards */}
          <Col md={9}>
            <Row className="g-3">
              {categories.map((item, i) => (
                <Col md={4} sm={6} xs={6} key={i}>
                  <div className="category-card text-center h-100">
                    <div className="icon-bg mx-auto mb-2">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h5 className="fw-bold mb-1 mt-4">{item.title}</h5>
                    <p className="text-danger small">{item.semester}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

         
        </Row>
      </Container>
    </div>
    <div className="popular-course py-5">
          <div className="zigzag mx-auto"></div>
          <h1 className="fw-bold heading-highlight text-center mt-2">Most Featured Courses</h1>
          <div className="container py-5">
            <div className="row">
              {courses.map((course, index) => (
                <div className="col-md-3 col-sm-6 mb-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm pop-course">
                    <img src={course.image} className="card-img-top" alt={course.title} />
                    <div className="card-body">
                      <h5 className="card-title mb-2 fw-bold">{course.title}</h5>
                      <p>{course.instructor}</p>
                      <p className="text-danger fw-bold">{course.price}</p>
                      <button 
                      className="btn enroll btn-sm w-50 text-white" 
                      style={{ backgroundColor: '#F24080', borderColor: '#F24080', borderRadius: '50px' }}
                      onClick={handleCourseDetail}>Enroll Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center pb-3">
            <button className="btn more-btn fw-bold" >
              VIEW ALL COURSES
            </button>
          </div>

        </div>
    </>
  );
}

export default Course;
