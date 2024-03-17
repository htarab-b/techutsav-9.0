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


import bytebattle from '../../assets/carousel/bytebattle.png'
import bugbusters from '../../assets/carousel/bugbusters.jpg'
import creativeclash from '../../assets/carousel/creativeclash.jpg'
import cybergiggles from '../../assets/carousel/cybergiggles.jpg'
import datadynamo from '../../assets/carousel/datadynamo.png'
import ideasmiths from '../../assets/carousel/ideasmiths.png'
import infographics from '../../assets/carousel/infographics.png'
import pixellno from '../../assets/carousel/pixellno.png'
import technostrom from '../../assets/carousel/technostrom.png'

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
                <SwiperSlide><img src={bytebattle} /></SwiperSlide>
                <SwiperSlide><img src={datadynamo} /></SwiperSlide>
                <SwiperSlide><img src={pixellno} /></SwiperSlide>
                <SwiperSlide><img src={ideasmiths} /></SwiperSlide>
                <SwiperSlide><img src={technostrom} /></SwiperSlide>
                <SwiperSlide><img src={cybergiggles} /></SwiperSlide>
                <SwiperSlide><img src={infographics} /></SwiperSlide>
                <SwiperSlide><img src={creativeclash} /></SwiperSlide>
                <SwiperSlide><img src={bugbusters} /></SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}
