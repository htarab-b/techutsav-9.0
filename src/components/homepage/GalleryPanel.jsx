import React, { lazy } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import image1 from '../../assets/gallery-image/DSC00825.JPG'
import image2 from '../../assets/gallery-image/DSC00976.JPG'
import image3 from '../../assets/gallery-image/DSC00977.JPG'
import image4 from '../../assets/gallery-image/DSC01000.JPG'
import image5 from '../../assets/gallery-image/DSC01014.JPG'
import image6 from '../../assets/gallery-image/DSC01056.JPG'
import image7 from '../../assets/gallery-image/image1.JPG'
import image8 from '../../assets/gallery-image/IMG_5237.JPG'
import image9 from '../../assets/gallery-image/IMG_5249.JPG'
import image10 from '../../assets/gallery-image/IMG_5256.JPG'
import image11 from '../../assets/gallery-image/IMG_5263.JPG'
import image12 from '../../assets/gallery-image/IMG_5265.JPG'
import image13 from '../../assets/gallery-image/IMG_5273.JPG'
import image14 from '../../assets/gallery-image/IMG_5315.JPG'
import image15 from '../../assets/gallery-image/IMG_5379.JPG'
import image16 from '../../assets/gallery-image/IMG_5478.JPG'

const GalleryPanel = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16
  ];
  
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
              {images.map((image, index) => (
                <div key={index}>
                  <img className={`grid-item grid-item-${index + 1}`} src={image} alt='' />
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
