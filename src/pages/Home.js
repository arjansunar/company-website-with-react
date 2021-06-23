import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/ServiceSection'
import SideBar from '../components/Sidebar'
import WorkSection from '../components/WorkSection'
import Footer from '../components/Footer'
import TeamSection from '../components/TeamSection'
<<<<<<< HEAD
import TestimonialSection from '../components/TestimonialSection'
=======
>>>>>>> 4e4483cc308c79379c29834183a8e37a14fb780e

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
<<<<<<< HEAD
            <TestimonialSection />
            <Footer />

=======
            <Footer />
>>>>>>> 4e4483cc308c79379c29834183a8e37a14fb780e
        </div>
    )
}

export default Home
