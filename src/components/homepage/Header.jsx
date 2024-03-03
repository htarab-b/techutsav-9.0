import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import tulogo from '../../assets/TechUtsav Logo white.png'
import '../../css/Header.css'

const Header = () => {
    return (
        <>
            <div className='header__head'>
                <Container>
                    <Row>
                        <Col md={8} className='header__left'>
                            <img src={tulogo} width={65} />
                        </Col>
                        <Col md={4} className='header__right'>
                            <button className="header__btn">
                                Events
                                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                    <path
                                        clip-rule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header
