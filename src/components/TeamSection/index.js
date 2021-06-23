import React from 'react'
import SectionHeading from '../SectionHeading'
import TeamCard from './card/TeamCard'
import { SectionCarousel } from "../TestimonialSection/TestimonialSectionElements"
import "./carousel.css"
// import CardTemplate from "../CardTemplate"

const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 900, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 3 },

]
function TeamSection() {
    return (
        <div id='team'>
            <SectionHeading
                tag="Our team"
                title="Your complete design Solution"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
            />
            {/* <GridContainer cols={4}> */}
            {/* <CardTemplate src={process.env.PUBLIC_URL + "assets/mobiledev.svg"} title='Card Title' text="Some quick example text to build on the card title and make up the
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
                    bulk of the card's content." /> */}
            <SectionCarousel breakPoints={breakPoints}>

                <TeamCard
                    image="https://images.unsplash.com/photo-1573496800808-56566a492b63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    name="Angelina Jolie"
                    title="digital marketer"
                />
                <TeamCard
                    image="https://images.unsplash.com/photo-1573496800808-56566a492b63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    name="Angelina Jolie"
                    title="digital marketer"
                />
                <TeamCard
                    image="https://images.unsplash.com/photo-1573496800808-56566a492b63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    name="Angelina Jolie"
                    title="digital marketer"
                />
                <TeamCard
                    image="https://images.unsplash.com/photo-1573496800808-56566a492b63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    name="Angelina Jolie"
                    title="digital marketer"
                />

            </SectionCarousel>


        </div>
    )
}

export default TeamSection
