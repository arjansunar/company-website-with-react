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
<<<<<<< HEAD
                    <SideBarLink to="home" onClick={toggle}>
                        Home
                    </SideBarLink>

=======
>>>>>>> 4e4483cc308c79379c29834183a8e37a14fb780e
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="work" onClick={toggle}>
                        Our Work
                    </SideBarLink>
                    <SideBarLink to="team" onClick={toggle}>
                        Our Team
                    </SideBarLink>
<<<<<<< HEAD
                    <SideBarLink to="testimonials" onClick={toggle}>
                        Testimonials
                    </SideBarLink>
=======

>>>>>>> 4e4483cc308c79379c29834183a8e37a14fb780e

                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default index
