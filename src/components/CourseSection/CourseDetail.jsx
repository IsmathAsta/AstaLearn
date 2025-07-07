import React from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import welcome from "../../assets/welcomeimg.webp"

export default function CourseDetail() {
  return (
    <>
      <div className='coursePge'>
        <section>
          <div className="header-section">
            <p className="text-light pb-5">Home / Course / Starting SEO as your Home Based Business</p>
            <h1 className="text-light pb-3">Starting SEO as your Home Based Business</h1>
            <p className="text-light pb-5 fw-bold">Instructor: Edward Norton</p>
          </div>
        </section>

        <Row style={{ margin: '0', padding: '0' }}>
          <Col md={8} style={{ paddingLeft: "5%", lineHeight: '2.5' }}>

            {/* Header Section */}
            <section className="about-course pt-5">
              <h2>Course Description</h2>
              <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.

                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
            </section>

            {/* What Will You Learn Section */}
            <section className="learn-section">
              <h2>What Will You Learn?</h2>
              <ul>
                <li>Master Arabic pronunciation, letter recognition, and basic recitation for a strong Quranic foundation.</li>
                <li>Apply proper Tajweed rules for accurate and fluent recitation.</li>
                <li>Recite the Quran fluently with confidence in Tajweed.</li>
                <li>Learn methods to memorize verses, starting from the last Juz or progressing at your own pace.</li>
                <li>Reflect on Quranic meanings and apply its teachings in daily life.</li>
              </ul>
            </section>

            {/* Material Includes Section */}
            {/* <section className="material-section">
              <h2>Material Includes</h2>
              <ul>
                <li>Hours of on-demand video</li>
                <li>50+ articles and texts</li>
              </ul>
            </section> */}

            {/* Course Curriculum Section */}
            <section className="curriculum-section mb-5">
              <h2>Course Curriculum</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Basic Introduction</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>A foundational 10-month course designed to help you master the basics of Arabic pronunciation and letter recognition, preparing you for Quranic recitation.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Fundamental Concept of HTML</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>A comprehensive 1-year program focused on perfecting your recitation, ensuring you follow the rules of Tajweed for precise and melodious recitation.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Programming Core Concept</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>A flexible course tailored to your individual pace, guiding you through the memorization of the Quran based on your personal efforts and commitment.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Intro to SEO</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Similar to the full memorization course, this program allows students to memorize the 30th Juz at their own speed, with personalized support and guidance.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </section>
          </Col>
          <Col md={4}>
            <div className="course-sidebar p-3 pt-5">
              <Card className="shadow-sm border-0 ">
                <Card.Img variant="top" src={welcome} />

                <Card.Body>
                  <h5 className="fw-bold mb-3">Course Includes:</h5>

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span><i className="fas fa-money-bill-wave me-2"></i>Price:</span>
                      <span className="text-danger fw-bold">$30</span>
                    </li>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span><i className="fas fa-user me-2"></i>Instructor:</span>
                      <span>Edward Norton</span>
                    </li>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span><i className="fas fa-clock me-2"></i>Duration:</span>
                      <span>15 weeks</span>
                    </li>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span><i className="fas fa-book me-2"></i>Lessons:</span>
                      <span>11</span>
                    </li>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span><i className="fas fa-users me-2"></i>Students:</span>
                      <span>227</span>
                    </li>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span><i className="fas fa-globe me-2"></i>Language:</span>
                      <span>English</span>
                    </li>
                    <li className="d-flex justify-content-between py-2">
                      <span><i className="fas fa-award me-2"></i>Certifications:</span>
                      <span>Yes</span>
                    </li>
                  </ul>

                  <Button variant="primary" className="w-100 rounded">Buy Now</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        {/* About Course Section */}
      </div>
    </>
  )
}