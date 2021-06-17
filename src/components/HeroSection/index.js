import React, { useState } from 'react'
import { HeroContainer, HeroHeading, HeroImage, HeroParagraph, HeroText } from './HeroElements'
import { Button } from '../ButtonElement'

function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroText>
                <HeroHeading>
                    Bring your Ideas to life
                </HeroHeading>
                <HeroParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                </HeroParagraph>
                <Button onMouseEnter={onHover} onMouseLeave={onHover} dark primary>
                    Get Started
                </Button>
            </HeroText>
            <HeroImage src={process.env.PUBLIC_URL + "assets/Hero-Mock-Creative.png"}>

            </HeroImage>
        </HeroContainer>
    )
}

export default HeroSection
