import React, { useRef, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import '../../css/EventCarousel.css'

export default function App() {
  return (
    <>
      <div className='section__panel'>
        <Container>
          <Row>
            <Col><h1>
              <Link to={"./events"}>Events</Link>
            </h1></Col>
          </Row>
          <Row className='section__content event__carousel'>
            <Col>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                // slidesPerView={'4'}
                breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 1
                  },
                  1024: {
                    slidesPerView: 4
                  }
                }}
                coverflowEffect={{
                  rotate: 10,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="mySwiper"
              >
               <SwiperSlide className='technostrom'>TECHNO STROM</SwiperSlide>
               <SwiperSlide className='datadynamo'>DATA DYNAMO</SwiperSlide>
               <SwiperSlide className='infographics'>INFOGRAPHICS</SwiperSlide>
               <SwiperSlide className='pixellno'>PIXELLNO</SwiperSlide>
               <SwiperSlide className='bussburst'>Idea Smiths</SwiperSlide>
               <SwiperSlide className='bytebattle'>BYTE BATTLE</SwiperSlide>
               <SwiperSlide className='cybergiggles'>CYBER GIGGLES</SwiperSlide>
               <SwiperSlide className='virtualsilhouette'>Creative Clash</SwiperSlide>
               <SwiperSlide className='bugbusters'>BUG BUSTERS</SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}
