import React from 'react'
import { HeroContainer, HeroHeading, HeroImage, HeroParagraph, HeroText } from './HeroElements'

function HeroSection() {
    return (
        <HeroContainer>
            <HeroText>
                <HeroHeading>
                    Bring your Ideas to life
                </HeroHeading>
                <HeroParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                </HeroParagraph>
            </HeroText>
            <HeroImage src={process.env.PUBLIC_URL + "assets/Hero-Mock-Creative.png"}>

            </HeroImage>
        </HeroContainer>
    )
}

export default HeroSection
