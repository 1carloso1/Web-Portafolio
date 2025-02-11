import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/carloso2.png";
import linkdnIcon from '../assets/img/nav-icon1.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'
import gitIcon from '../assets/img/nav-icon4.svg'
import { instaLink, gitLink, linkdnLink } from "../consts"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href={instaLink}><img src={instagramIcon} alt="" /></a>
              <a href={linkdnLink}><img src={linkdnIcon} alt="" /></a>
              <a href={gitLink}><img src={gitIcon} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}