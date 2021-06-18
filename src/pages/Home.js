import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/ServiceSection'
import SideBar from '../components/Sidebar'
import AboutSection from "../components/AboutSection"
import ContactSection from '../components/ContactSection'

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
            <AboutSection />
            <ContactSection />
        </div>
    )
}

export default Home
