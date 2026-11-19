import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../sections/Home/Hero'
import Story from '../../sections/Home/StorySection'
import Specialties from '../../sections/Home/Specialties'
import Ticker from '../../sections/Home/Ticker'
import MenuSection from '../../sections/Home/MenuSection'
import Technology from '../../sections/Home/Technology'
import FeaturesBar from '../../sections/Home/FeaturesBar'

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="relative isolate overflow-x-clip">
        <Hero />
        <Specialties />
        <Story />
        <Ticker />
        <MenuSection />
        <Technology />
        <FeaturesBar />
        
      </main>
    </>
  )
}

export default Home