import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillInstagram } from "react-icons/ai";
import { FaHeart } from 'react-icons/fa';
import '../../css/Footer.css'

const Footer = () => {
  return (

    <Container>
      <footer>
        <div className="footer__bottom mt-4">
          <span className="footer__bottom_copyright">
            ©{new Date().getFullYear()} TechUtsav 9.0 <span>This webiste is made with <FaHeart /> by <span className='footer__bottom_copy_bold'>Tech Team</span></span>
          </span>
          <span className="footer__menu">
            <a href="#">Home</a>
            <a href="/events">Events</a>
            <a href="/about">About</a>
          </span>

          <ul className="footer__social_container">
            <li className="footer__social_icon"><a href="#"><AiFillInstagram /></a></li>
            <li className="footer__social_icon"><a href="#"><AiFillInstagram /></a></li>
            <li className="footer__social_icon"><a href="#"><AiFillInstagram /></a></li>
          </ul>
        </div>
      </footer>
    </Container>

  );
}

export default Footer;
