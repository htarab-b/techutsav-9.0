import React from 'react';
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
              <div key="1">
                <img className="grid-item grid-item-1" src={image1} alt='' />
              </div>
              <div key="2">
                <img className="grid-item grid-item-2" src={image2} alt='' />
              </div>
              <div key="3">
                <img className="grid-item grid-item-3" src={image3} alt='' />
              </div>
              <div key="4">
                <img className="grid-item grid-item-4" src={image4} alt='' />
              </div>
              <div key="6">
                <img className="grid-item grid-item-6" src={image6} alt='' />
              </div>
              <div key="7">
                <img className="grid-item grid-item-7" src={image7} alt='' />
              </div>
              <div key="8">
                <img className="grid-item grid-item-8" src={image8} alt='' />
              </div>
              <div key="9">
                <img className="grid-item grid-item-9" src={image9} alt='' />
              </div>
              <div key="10">
                <img className="grid-item grid-item-10" src={image10} alt='' />
              </div>
              <div key="11">
                <img className="grid-item grid-item-11" src={image11} alt='' />
              </div>
              <div key="12">
                <img className="grid-item grid-item-12" src={image12} alt='' />
              </div>
              <div key="13">
                <img className="grid-item grid-item-13" src={image13} alt='' />
              </div>
              <div key="14">
                <img className="grid-item grid-item-14" src={image14} alt='' />
              </div>
              <div key="15">
                <img className="grid-item grid-item-15" src={image15} alt='' />
              </div>
              <div key="16">
                <img className="grid-item grid-item-16" src={image16} alt='' />
              </div>
              <div key="5">
                <img className="grid-item grid-item-5" src={image5} alt='' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GalleryPanel;
