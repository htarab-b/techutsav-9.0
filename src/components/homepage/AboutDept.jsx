import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import infernoLogo from '../../assets/inferno_logo.png'
import liveWireLogo from '../../assets/LW_logo.png'

const AboutDept = () => {
  return (
    <div className='section__panel'>
      <Container>
        <Row>
          <Col><h1 className='section__title_h1'>
            About Department / Club
          </h1></Col>
        </Row>
        <Row className='section__content'>
          <Col md={6}>
            <div className="about__dept_card">
              <div className="about__dept_card-inner">
                <div className="about__dept_card-front">
                  <p>Department of Computer Science</p>
                </div>
                <div className="about__dept_card-back">
                  <img src={infernoLogo} width={100} />
                  <p> Club Inferno</p>
                </div>
              </div>
            </div>

          </Col>
          <Col md={6}>
            <div className="about__dept_card">
              <div className="about__dept_card-inner">
                <div className="about__dept_card-front">
                  <p>Department of Computer Applications</p>
                </div>
                <div className="about__dept_card-back">
                  <img src={liveWireLogo} width={250} />
                  <p> Livewires</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutDept
