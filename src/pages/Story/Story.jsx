import React from 'react'
import Navbar from '../../components/Navbar'
import StoryHero from '../../sections/Story/Hero'
import WhoWeAre from '../../sections/Story/WhoWeAre'
import HowItBegan from '../../sections/Story/How'
import FoundersVision from '../../sections/Story/FoundersVision'
import Footer from '../../components/Footer'
import Awards from '../../sections/Story/Awards'
import StatsBreak from '../../sections/Story/StatsBreak'
import TwoExpressions from '../../sections/Story/TwoExpressions'
import FamilyBanner from '../../sections/Story/FamilyBanner'
import CallToAction from '../../sections/Story/CallToAction'


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
            <TwoExpressions />
            <FamilyBanner />
            <CallToAction />
            <Footer/>
            </main>

        </>
    )
}

export default Story
