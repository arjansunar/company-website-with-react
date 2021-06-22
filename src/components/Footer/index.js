import React from "react";
import {
    FooterContainer,
    FooterWrapper, FooterLinkWrapper, FooterLink,
    FooterLogo, FooterCopyrightSection, FooterSocialIcon, SocialLinksWrapper, CopyrightText
} from "./FooterElements"

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo>Logo</FooterLogo>
                <FooterLinkWrapper>
                    <FooterLink to="services">Services</FooterLink>
                    <FooterLink to="team">Our Team</FooterLink>
                    <FooterLink to="work">Our Work</FooterLink>
                </FooterLinkWrapper>
            </FooterWrapper>
            <FooterCopyrightSection>
                <CopyrightText>© 2020 RootLevel. All rights reserved</CopyrightText>
                <SocialLinksWrapper>
                    <FooterSocialIcon
                        network="facebook"
                        style={{ height: "25px", width: "25px" }}
                        url=""
                    />
                    <FooterSocialIcon
                        style={{ height: "25px", width: "25px" }}
                        url="mailto:careers@therootlevel.com"
                    />
                    <FooterSocialIcon
                        network="linkedin"
                        style={{ height: "25px", width: "25px" }}
                        url=""
                    />
                </SocialLinksWrapper>
            </FooterCopyrightSection>
        </FooterContainer>
    );
}
