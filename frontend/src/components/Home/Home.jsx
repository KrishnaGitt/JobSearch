import React from 'react'
import HeroSection from "../HeroSection/HeroSection.jsx"
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel.jsx"
import LatestJob from "../LatestJob/LatestJob.jsx"
export const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJob/>
    </div>
  )
}

export default Home;
