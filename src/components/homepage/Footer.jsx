import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-07">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h2 className="footer-heading"><a href="#" className="logo">TechUtsav 9.0</a></h2>
            <p className="menu">
              <a href="#">Home</a>
              <a href="#">Events</a>
              <a href="#">About</a>
            </p>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><IoLogoTwitter /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><IoLogoFacebook /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><IoLogoInstagram /></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <p className="copyright">
              Copyright ©{new Date().getFullYear()} All rights reserved | This webiste is made with <FaHeart /> by <a href="#" target="_blank">Devlopers</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
