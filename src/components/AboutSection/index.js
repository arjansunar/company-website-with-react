import React from 'react'
import SectionHeading from '../SectionHeading'
import { GridContainer } from "../ServiceSection/ServiceSectionElements"
import CardTemplate from "../CardTemplate"

function AboutSection() {
    return (
        <div id='about'>
            <SectionHeading
                tag="About Us"
                title="Your complete design Solution"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
            />
            <GridContainer cols={3}>
                <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
                    bulk of the card's content." />
                <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
                    bulk of the card's content." />
                <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
                    bulk of the card's content." />
                <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
                    bulk of the card's content." />
                <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
                    bulk of the card's content." />
                <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
                    bulk of the card's content." />

            </GridContainer>
        </div>
    )
}

export default AboutSection
