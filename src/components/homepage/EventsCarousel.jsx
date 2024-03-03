import React, { useRef, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className='section__panel'>
        <Container>
          <Row>
            <Col><h1 className='section__title_h1'>
              Events
            </h1></Col>
          </Row>
          <Row className='section__content event__carousel'>
            <Col>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
             
              slidesPerView={'4'}
                coverflowEffect={{
                  rotate: 10,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="mySwiper"

              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}
