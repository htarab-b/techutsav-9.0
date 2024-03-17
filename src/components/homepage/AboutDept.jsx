import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import infernoLogo from '../../assets/inferno_logo.png'
import liveWireLogo from '../../assets/LW_logo.png'
import { AiFillMail, AiFillInstagram, AiFillLinkedin  } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

import '../../css/AboutDept.css'

const AboutDept = () => {
  return (
    <div className='section__panel about__dept'>
      <Container fluid>
        <h1 className='section__title_h1'>
          About Department / Club
        </h1>
        <div className='section__content about__dept_cards'>
          <div className="about__dept_flip-card">
            <div className="about__dept_flip-card-inner">
              <div className="about__dept_flip-card-front">
                <h3>Department of Computer Science</h3>
                <p>
                  The Department of Computer Science at SRM Institute of Science and Technology shapes adept professionals with strong values to lead the nation. With a focus on practical programming skills, our curriculum prepares students for successful careers in the software industry. Our faculty excel in research areas such as artificial intelligence and cybersecurity, providing hands-on learning opportunities. Through internships and research programs, students gain practical experience and build professional networks, ensuring readiness for the evolving field of computer science.
                </p>
              </div>
              <div className="about__dept_flip-card-back">
                <img src={infernoLogo} />
                <p> Club Inferno</p>
                <div className='about__dept_social_icons'>
                  <a target='_blank' href='https://www.instagram.com/inferno_srm/'><AiFillInstagram /></a>
                  <a target='_blank' href='mailto:clubinfernosrm@gmail.com'><AiFillMail /></a>
                  <a target='_blank' href='https://www.linkedin.com/company/clubinferno/'><AiFillLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about__dept_flip-card">
            <div className="about__dept_flip-card-inner">
              <div className="about__dept_flip-card-front">
                <h3>Department of Computer Applications</h3>
                <p>
                  The Computer Applications Department at SRM Institute of Science and Technology has excelled since its inception in 2005, becoming a beacon of quality education with a modern curriculum. Offering a broad spectrum of undergraduate and postgraduate programs, including BCA, BCA Data Science, MCA, and M.Sc Applied Data Science, it ranks among India's top institutions. Its flexible curriculum, emphasizing both theory and application, makes it a preferred choice for students seeking industry-relevant education in Tamil Nadu and beyond.
                </p>
              </div>
              <div className="about__dept_flip-card-back">
                <img src={liveWireLogo} className='livewire' />
                <p> LiveWires_</p>
                <div className='about__dept_social_icons'>
                  <a target='_blank' href='https://www.instagram.com/live.wires_'><AiFillInstagram /></a>
                  <a target='_blank' href='mailto:livewires2k20@gmail.com'><AiFillMail /></a>
                  <a target='_blank' href='https://x.com/LiveWires_2k23?t=SfRtFlFjs0MBaof2ypydhQ&s=09'><RiTwitterXFill  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutDept
