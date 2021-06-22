import React, { useState } from 'react'
import { HeroContainer, HeroHeading, HeroImage, HeroParagraph, HeroText } from './HeroElements'
import { Button } from '../ButtonElement'

function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroText>
                <HeroHeading>
                    We build your dream
                </HeroHeading>
                <HeroParagraph>
                    Tempor mauris integer condimentum sed diam fringilla tincidunt mauris luctus. In ut odio vitae eget mauris at elit feugiat. Viverra curabitur tristique mauris orci massa sagittis velit facilisi iaculis. Iaculis                 </HeroParagraph>
                <Button onMouseEnter={onHover} onMouseLeave={onHover} dark primary>
                    Get Started
                </Button>
            </HeroText>
            <HeroImage src={process.env.PUBLIC_URL + "assets/HeroSectionImg.svg"}>

            </HeroImage>
        </HeroContainer>
    )
}

export default HeroSection
