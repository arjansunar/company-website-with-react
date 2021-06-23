import React from "react";
import {
    CardWrapper,
    CardProfileWrapper,
    CardProfileImage,
    CardTextWrapper,
    CardName,
    CardTitle,
    CardImage,
    CardDesc
} from "./TestimonialCardElements";

export default function TestimonialCard({
    name,
    title,
    profileImg,
    description
}) {
    return (
        <div>
            <CardWrapper>
                <CardProfileWrapper>
                    <CardProfileImage src={profileImg} />

                </CardProfileWrapper>
                <CardTextWrapper>
                    <CardName>{name}</CardName>
                    <CardTitle>{title}</CardTitle>
                    <CardImage src="assets/testimonials-quote.svg" />
                    <CardDesc>{description}</CardDesc>
                </CardTextWrapper>
            </CardWrapper>
        </div>
    );
}
