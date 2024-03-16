import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import tulogo from '../../assets/TechUtsav Logo white.png'
import '../../css/AboutTu.css'

const AboutTu = () => {
    return (
        <>
            <div className='section__panel'>
                <Container>
                    <h1>
                        About <span>TechUtsav 9.0</span>
                    </h1>

                    <Row className='section__content'>
                        {/* <Col md={2} className='section_about_tu_img'>
                            <img src={tulogo} width={100} />
                        </Col> */}
                        <Col md={12} className='section_about_tu_text'>
                            <p>
                                TechUtsav 9.0, an inter-collegiate Technical Symposium, is poised to ignite the flames of innovation and celebrate the indomitable spirit of technology. Hosted by two vibrant and forward-thinking clubs, Club Inferno and LiveWires_, hailing from the esteemed <strong className='highlight'>SRM Institute of Science and Technology (SRMIST)</strong>, this event promises to be an electrifying convergence of intellect, creativity, and state-of-the-art technology.
                            </p>
                            <p>
                                Participants can anticipate a plethora of stimulating activities, including engaging workshops, riveting competitions, enlightening guest lectures, and captivating demonstrations. TechUtsav 9.0 serves as a melting pot for aspiring technocrats, providing them with a platform to showcase their ingenuity, exchange ideas, and foster collaborations.
                            </p>
                            <p>
                                With its unwavering commitment to fostering innovation and nurturing talent, TechUtsav 9.0 epitomizes the ethos of SRMIST, where excellence meets opportunity. Join us as we embark on a journey fueled by passion, curiosity, and the relentless pursuit of technological advancement. Let's together illuminate the path towards a brighter, more innovative future.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutTu
