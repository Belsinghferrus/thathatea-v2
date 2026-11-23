import React from 'react'
import Navbar from '../../components/Navbar'
import StoryHero from '../../sections/Story/Hero'
import WhoWeAre from '../../sections/Story/WhoWeAre'
import HowItBegan from '../../sections/Story/How'
import FoundersVision from '../../sections/Story/FoundersVision'

const Story = () => {
    return (
        <>
            <Navbar />
            <main>
            <StoryHero />
            <WhoWeAre />
            <HowItBegan />
            <FoundersVision />
            </main>

        </>
    )
}

export default Story
