import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/ServiceSection'
import SideBar from '../components/Sidebar'
import WorkSection from '../components/WorkSection'
import Footer from '../components/Footer'
import TeamSection from '../components/TeamSection'
import TestimonialSection from '../components/TestimonialSection'

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
            <WorkSection />
            <TeamSection />
            <TestimonialSection />
            <Footer />

        </div>
    )
}

export default Home
