import React from 'react'
import Navbar from '../../components/Navbar'
import StoryHero from '../../sections/Story/Hero'
import WhoWeAre from '../../sections/Story/WhoWeAre'
import HowItBegan from '../../sections/Story/How'
import FoundersVision from '../../sections/Story/FoundersVision'
import Footer from '../../components/Footer'
import Awards from '../../sections/Story/Awards'
import StatsBreak from '../../sections/Story/StatsBreak'


const Story = () => {
    return (
        <>
            <Navbar />
            <main>
            <StoryHero />
            <WhoWeAre />
            <HowItBegan />
            <FoundersVision />
            <Awards />
            <StatsBreak />
            <Footer/>
            </main>

        </>
    )
}

export default Story
