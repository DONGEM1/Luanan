import { Container, Col, Row } from "reactstrap";
import './Footer.css';


export default function Footer() {
    return (
        <div>
            <Container>
                <Row md="4" sm="2" xs="1">
                    <Col className="bg-light border">
                        CHÍNH SÁCH
                        <h6> Tìm kiểm</h6>
                        <h6> Giới thiệu</h6>
                        <h6> Chính sách đổi trả </h6>
                        <h6> Chính sách bảo mật </h6>
                        <h6> Điều khoản dịch vụ </h6>
                    </Col>
                    <Col className="bg-light border">
                        THÔNG TIN HỖ TRỢ

                    </Col>
                    <Col className="bg-light border">
                        ĐĂNG KÝ NHẬN ƯU ĐÃI
                        <h6> Đăng ký bằng email của bạn để nhận ưu đãi</h6> 
                        <input placeholder="Email của bạn"/>
                        <button > ĐĂNG KÝ</button>
                        <h2><a><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-square-instagram"></i> <i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-paypal"></i></a></h2>
                    </Col>
                    <Col className="bg-light border">
                        STORE WACHT MEN
                        <h6> Địa chỉ: Tầng 70, tòa nhà lanmart 81, tphcm</h6>
                        <h6> Hotline:1900147</h6>
                        <h6> Email:Lolem@gmail.com </h6>
                        <h6> Giời: </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
