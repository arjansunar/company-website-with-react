import React from 'react'
import SectionHeading from '../SectionHeading'
import { GridContainer } from "./ServiceSectionElements"
import CardTemplate from "../CardTemplate"

function ServiceSection() {
    return (
        <div id='services'>
            <SectionHeading
                tag="Our Services"
                title="Your complete design Solution"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
            />
            <GridContainer cols={3}>
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />

            </GridContainer>
        </div>
    )
}

export default ServiceSection
