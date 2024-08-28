import React from 'react'
import HeroSection from "../HeroSection/HeroSection.jsx"
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel.jsx"
import LatestJob from "../LatestJob/LatestJob.jsx"
import Footer from '../Footer/Footer.jsx'
export const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home;
