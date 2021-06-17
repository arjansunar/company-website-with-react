import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/ServiceSection'
import SideBar from '../components/Sidebar'

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>

            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <ServiceSection />
        </div>
    )
}

export default Home
