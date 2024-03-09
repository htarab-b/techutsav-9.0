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
                <Link to={"./register/techno%20strom"}><SwiperSlide className='technostrom'>TECHNO STROM</SwiperSlide></Link>
                <Link to={"./register/data%20dynamo"}><SwiperSlide className='datadynamo'>DATA DYNAMO</SwiperSlide></Link>
                <Link to={"./register/infographics"}><SwiperSlide className='infographics'>INFOGRAPHICS</SwiperSlide></Link>
                <Link to={"./register/pixellno"}><SwiperSlide className='pixellno'>PIXELLNO</SwiperSlide></Link>
                <Link to={"./register/buss%20burst"}><SwiperSlide className='bussburst'>BUSS BURST</SwiperSlide></Link>
                <Link to={"./register/byte%20battle"}><SwiperSlide className='bytebattle'>BYTE BATTLE</SwiperSlide></Link>
                <Link to={"./register/cyber%20giggles"}><SwiperSlide className='cybergiggles'>CYBER GIGGLES</SwiperSlide></Link>
                <Link to={"./register/virtual%20silhouette"}><SwiperSlide className='virtualsilhouette'>VIRTUAL SILHOUETTE</SwiperSlide></Link>
                <Link to={"./register/bug%20busters"}><SwiperSlide className='bugbusters'>BUG BUSTERS</SwiperSlide></Link>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}
