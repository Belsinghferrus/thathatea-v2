import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../sections/Home/Hero'
import Story from '../../sections/Home/StorySection'

const Home = () => {
  return (
   <>
   <Navbar />
   <main>
    <Hero />
    <Story />
   </main>
   </>
  )
}

export default Home
