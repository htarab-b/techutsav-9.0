import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import tulogo from '../../assets/TechUtsav Logo white.png'

const AboutTu = () => {
    return (
        <>
            <div className='section__panel'>
                <Container>
                    <Row>
                        <Col><h1 className='section__title_h1'>
                            About TechUtsav 9.0
                        </h1></Col>
                    </Row>
                    <Row className='section__content'>
                        {/* <Col md={2} className='section_about_tu_img'>
                            <img src={tulogo} width={100} />
                        </Col> */}
                        <Col md={12} className='section_about_tu_text'>
                            <p>
                                Tech Utsav, an inter-collegiate Technical Symposium, is set to ignite the sparks of innovation and celebrate the spirit of technology. Organized by two dynamic clubs, Club Inferno and Live Wires, from the prestigious <strong class="highlight">SRM Institute of Science and Technology (SRMIST)</strong>, this event is a convergence of brilliance, curiosity, and cutting-edge technology.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutTu
