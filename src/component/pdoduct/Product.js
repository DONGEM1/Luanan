
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";
import './Product.css';
import img3 from '../img/Dongho3.jpg'
export default function Product() {
    return (
        <Container>
            <Row >
                <Col>
                    <Card
                        style={{
                            width: '1rem'
                        }}
                    >
                        <img
                            alt="Dong ho nam"
                            src={img3}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Casino FaceOshee
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                <del>500.00vnd</del>
                                <strong>400.000vnd</strong>
                            </CardSubtitle>
                            <CardText>
                                Đồng hồ nam cao cấp dành cho dân văn ph
                            </CardText>
                            <Button>
                                Vào Mua
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}
