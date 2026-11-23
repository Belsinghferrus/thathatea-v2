import React from 'react'
import Navbar from '../../components/Navbar'
import StoryHero from '../../sections/Story/Hero'
import WhoWeAre from '../../sections/Story/WhoWeAre'
import HowItBegan from '../../sections/Story/How'

const Story = () => {
    return (
        <>
            <Navbar />
            <main>
            <StoryHero />
            <WhoWeAre />
            <HowItBegan />
            </main>

        </>
    )
}

export default Story
