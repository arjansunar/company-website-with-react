import React from 'react'
import SectionHeading from '../SectionHeading'
import TestimonialCard from './card'
import { SectionCarousel } from './TestimonialSectionElements'
import "./carousel.css"

const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 },

]
function TestimonialSection() {
    return (
        <div id='testimonials'>
            <SectionHeading
                tag="Our Services"
                title="Your complete design Solution"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
            />

            <SectionCarousel breakPoints={breakPoints}>
                <TestimonialCard
                    name="Christopher Nolan"
                    title="CEO, Nami College"
                    profileImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    description="Quis justo, erat arcu velit magna. Eu dui in curabitur platea egestas egestas. Amet quis sagittis, fusce mauris enim nascetur eget eu massa. Egestas ultrices et, turpis tortor ultrices at pretium penatibus auctor. Cursus in "
                />
                <TestimonialCard
                    name="Christopher Nolan"
                    title="CEO, Nami College"
                    profileImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    description="Quis justo, erat arcu velit magna. Eu dui in curabitur platea egestas egestas. Amet quis sagittis, fusce mauris enim nascetur eget eu massa. Egestas ultrices et, turpis tortor ultrices at pretium penatibus auctor. Cursus in "
                />
                <TestimonialCard
                    name="Christopher Nolan"
                    title="CEO, Nami College"
                    profileImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    description="Quis justo, erat arcu velit magna. Eu dui in curabitur platea egestas egestas. Amet quis sagittis, fusce mauris enim nascetur eget eu massa. Egestas ultrices et, turpis tortor ultrices at pretium penatibus auctor. Cursus in "
                />
                <TestimonialCard
                    name="Christopher Nolan"
                    title="CEO, Nami College"
                    profileImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    description="Quis justo, erat arcu velit magna. Eu dui in curabitur platea egestas egestas. Amet quis sagittis, fusce mauris enim nascetur eget eu massa. Egestas ultrices et, turpis tortor ultrices at pretium penatibus auctor. Cursus in "
                />
                <TestimonialCard
                    name="Christopher Nolan"
                    title="CEO, Nami College"
                    profileImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    description="Quis justo, erat arcu velit magna. Eu dui in curabitur platea egestas egestas. Amet quis sagittis, fusce mauris enim nascetur eget eu massa. Egestas ultrices et, turpis tortor ultrices at pretium penatibus auctor. Cursus in "
                />
                <TestimonialCard
                    name="Christopher Nolan"
                    title="CEO, Nami College"
                    profileImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    description="Quis justo, erat arcu velit magna. Eu dui in curabitur platea egestas egestas. Amet quis sagittis, fusce mauris enim nascetur eget eu massa. Egestas ultrices et, turpis tortor ultrices at pretium penatibus auctor. Cursus in "
                />
            </SectionCarousel>

        </div>
    )
}

export default TestimonialSection
