import { Button, Col, Container, Row } from "react-bootstrap";
import trained from "../../assets/sucess.png";
import student from "../../assets/rate.png";
import statistic from "../../assets/stat.png";
import community from "../../assets/comm.png"

function Enroll() {
   const statsData = [
  {
    image: trained,
    value: '500+',
    label: 'Institutes Onboarded',
  },
  {
    image: student,
    value: '10k+',
    label: 'Teachers Using Platform',
  },
  {
    image: statistic,
    value: '120k+',
    label: 'Students Managed',
  },
  {
    image: community,
    value: '95%',
    label: 'User Satisfaction',
  },
];
    return (
        <div className="stats-bg">
            <h2 className="text-center fw-bold pt-5">Trusted by Institutes Across the Country</h2>
<p className="text-center text-muted mb-4">Our platform powers modern education at scale — see the numbers that speak for themselves.</p>

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
          
        </div>
    )
}
export default Enroll;