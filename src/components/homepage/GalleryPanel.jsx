import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GalleryData from '../../utils/GalleryData'; // Import the data

const GalleryPanel = () => {
  return (
    <div className='section__panel'>
      <Container>
        <Row>
          <Col>
            <h1 className='section__title_h1'>
              Gallery
            </h1>
          </Col>
        </Row>
        <Row className='section__content'>
          <Col>
            <div className="grid-container">
              {GalleryData.map(item => (
                <div key={item.id}>
                  <img className={`grid-item grid-item-${item.id}`} src={item.imageUrl} alt='' />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GalleryPanel;
