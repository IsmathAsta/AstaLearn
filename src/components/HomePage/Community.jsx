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
           
        </div>
    )
}
export default Community;