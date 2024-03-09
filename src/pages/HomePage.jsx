import React from 'react'
import Header from '../components/homepage/Header'
import HeroSection from '../components/homepage/HeroSection'
import AboutTu from '../components/homepage/AboutTu'
import GalleryPanel from '../components/homepage/GalleryPanel'
import EventCarousel from '../components/homepage/EventsCarousel'
import AboutDept from '../components/homepage/AboutDept'
import Sponsors from '../components/homepage/Sponsors'
import Footer from '../components/homepage/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutTu />
      <EventCarousel/>
      <GalleryPanel/>
      <AboutDept/>
      <Sponsors/>
      {/* <Footer/> */}
    </>
  )
}

export default HomePage
