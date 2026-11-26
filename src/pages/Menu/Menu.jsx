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
                <MenuSection />
            </main>
        </>
    )
}

export default Menu
