import React, { useState } from "react";
import {
    CardWrapper,
    CardDescWrapper,
    CardTextWrapper,
    CardName,
    CardTitle,
    CardSocialLinks, CardSocialIcon
} from "./TeamCardElements";

export default function TeamCard({
    name,
    title,
    image,
    // socialLinks
}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <CardWrapper
                imageSrc={image}
                hover={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardSocialLinks hover={isHovered}>
                    <CardSocialIcon
                        network="facebook"
                        style={{ height: "25px", width: "25px" }}
                        url=""
                    />
                    <CardSocialIcon
                        style={{ height: "25px", width: "25px" }}
                        url="mailto:careers@therootlevel.com"
                    />
                    <CardSocialIcon
                        network="linkedin"
                        style={{ height: "25px", width: "25px" }}
                        url=""
                    />
                </CardSocialLinks>
                <CardDescWrapper>
                    <CardTextWrapper>
                        <CardName>{name}</CardName>
                        <CardTitle>{title}</CardTitle>
                    </CardTextWrapper>
                </CardDescWrapper>
            </CardWrapper>

        </div>
    );
}
