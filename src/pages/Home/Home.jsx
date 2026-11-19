import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../sections/Home/Hero'
import Story from '../../sections/Home/StorySection'
import Specialties from '../../sections/Home/Specialties'
import Ticker from '../../sections/Home/Ticker'

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="relative isolate overflow-x-clip">
        <Hero />
        <Specialties />
        <Story />
        <Ticker />
      </main>
    </>
  )
}

export default Home