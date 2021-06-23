import React, { useState } from "react";
import {
    CardWrapper,
    CardImage,
    CardTitle,
    CardDescWrapper,
    CardH,
    CardP
} from "./WorkCardElements";
export default function ServicesCard({
    title,
    description,
    image,
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <CardWrapper
                hover={isHovered}
                onMouseEnter={() => {
                    console.log("here");
                    setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardImage src={image} />
                <CardTitle hover={isHovered}>{title}</CardTitle>
                <CardDescWrapper hover={isHovered}>
                    <CardH>{title}</CardH>
                    <CardP>{description}</CardP>
                </CardDescWrapper>
            </CardWrapper>
        </div>
    );
}
