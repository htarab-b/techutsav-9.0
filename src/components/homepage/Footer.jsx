import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillInstagram } from "react-icons/ai";
import { FaHeart } from 'react-icons/fa';
import '../../css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={12} className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className="footer__head"><a href="#" className="logo">TechUtsav 9.0</a></h1>
            <span className="footer__menu">
              <a href="#">Home</a>
              <a href="#">Events</a>
              <a href="#">About</a>
            </span>
            <ul className="footer__social_container">
              <li className="footer__social_icon"><a href="#"><AiFillInstagram /></a></li>
              <li className="footer__social_icon"><a href="#"><IoLogoFacebook /></a></li>
              <li className="footer__social_icon"><a href="#"><IoLogoFacebook /></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="footer__bottom">
            <span className="footer__bottom_copyright">
               ©{new Date().getFullYear()} TechUtsav 9.0 <span>This webiste is made with <FaHeart /> by <span className='footer__bottom_copy_bold'>Tech Team</span></span>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
