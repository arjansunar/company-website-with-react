import React from "react";
import {
    CardWrapper,
    CardTextContainer,
    CardDescription,
    CardTitle,
    CardImage,
    CardImageContainer
} from "./ServiceCardElements";

export default function ServicesCard({
    title,
    description,
    image,
    bgColor,
    imgLeft
}) {
    return (
        <div>
            <CardWrapper bg={bgColor} imgLeftPos={imgLeft}>
                <CardTextContainer>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardTextContainer>
                <CardImageContainer>
                    <CardImage src={image} />
                </CardImageContainer>
            </CardWrapper>
        </div>
    );
}
