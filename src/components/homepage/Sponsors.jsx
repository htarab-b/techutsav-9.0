import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import poorvika from '../../assets/poorvika-logo.svg'

import '../../css/Sponsors.css'

const Sponsors = () => {
  return (
    <>
      <div className='section__panel final_content'>
        <Container>
          <Row>
            <Col><h1 className='section__title_h1'>
              Sponsors
            </h1></Col>
          </Row>
          <Row className='section__content'>
            <div className='sponsers__logo_container'>
              <img src={poorvika} />
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Sponsors
