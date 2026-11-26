import React from 'react'
import Navbar from '../../components/Navbar'
import MenuHero from '../../sections/Menu/MenuHero.jsx'
import MenuTicker from '../../sections/Menu/MenuTicker.jsx'
import MenuSection from '../../sections/Menu/MenuSection.jsx'

const Menu = () => {
    return (
        <>
            <Navbar />
            <main>
                <MenuHero />
                <MenuTicker />
                
                <div className="w-full h-20 bg-soft-ivory flex items-center justify-center">
                    <h2>DEVELOPMENT STILL PENDING ----</h2>
                </div>

                <MenuSection />
            </main>
        </>
    )
}

export default Menu
