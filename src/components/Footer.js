import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/carloso2.png";
import linkdnIcon from '../assets/img/nav-icon1.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'
import gitIcon from '../assets/img/nav-icon4.svg'
const gitLink = "https://github.com/1carloso1"
const instaLink = "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_carloso_%3Figsh%3DMTk4OW94N205bTh5cg%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR34K9URCO5-mr4NJkwvyDVOaza2nGeo6JkmmEqiRBahVBnpjgjmlKBSKO0_aem_COrAEZAR9_Z5JvMaFgCugg&h=AT2946MaA24JXXgM4efQC-9kaDu95SgCwm1Mz-tJlcgxhnrBDFFSBD0kGOzQRary5KO4_wZBD6XQn1325XT6KptSwxeUn35n1vrxD3qQUhXOqYigDKNvxVPf9x5yLQqnYAJNpQ"
const linkdnLink = "https://www.linkedin.com/in/carlos-eduardo-olvera-851843337/"

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
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}