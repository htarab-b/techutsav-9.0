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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem enim, ornare non fringilla sit amet, egestas vehicula eros. Quisque ultrices augue vel est tincidunt, eget tempus elit volutpat. Sed vel cursus neque. Integer sed cursus justo. Nam scelerisque tincidunt ante, tristique condimentum elit ornare in. Phasellus semper mollis turpis, non dapibus enim convallis nec. Mauris pulvinar, justo sed tincidunt ullamcorper, lacus mauris eleifend lacus, vel consectetur nisi dui ut urna. Nulla ac tortor odio. Vestibulum mollis in ipsum non dictum. Vestibulum egestas egestas facilisis. Nam tempor enim at quam hendrerit, et aliquam magna tempus. Nunc in lacus egestas, blandit quam et, facilisis dolor. Curabitur sit amet sem velit. Nam sed pharetra odio. Aliquam consectetur leo metus, eget varius velit feugiat quis. Fusce in tincidunt risus.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutTu
