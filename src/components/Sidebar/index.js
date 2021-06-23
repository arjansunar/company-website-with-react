import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from './SidebarElements'

function index({ isOpen, toggle }) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="home" onClick={toggle}>
                        Home
                    </SideBarLink>

                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="work" onClick={toggle}>
                        Our Work
                    </SideBarLink>
                    <SideBarLink to="team" onClick={toggle}>
                        Our Team
                    </SideBarLink>
                    <SideBarLink to="testimonials" onClick={toggle}>
                        Testimonials
                    </SideBarLink>

                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default index
