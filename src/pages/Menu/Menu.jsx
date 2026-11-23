import React from 'react'
import Navbar from '../../components/Navbar'
import MenuHero from '../../sections/Menu/MenuHero.jsx'
import MenuTicker from '../../sections/Menu/MenuTicker.jsx'

const Menu = () => {
    return (
        <>
            <Navbar />
            <main>
                <MenuHero />
                <MenuTicker />

            </main>
        </>
    )
}

export default Menu
