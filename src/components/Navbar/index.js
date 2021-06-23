import React from 'react'
import { Nav, NavContainer, Logo, MobileIcon, NavItem, NavLinks, NavMenu, NavButton } from "./NavbarElements"
import { FaBars } from 'react-icons/fa'

function index({ toggle }) {
    return (
        <Nav>
            <NavContainer>
                <Logo to="/" >Logo</Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" activeClass="active" spy={true} smooth={true} offset={-80} duration={300} >
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" activeClass="active" spy={true} smooth={true} offset={-10} duration={300} >
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="work" activeClass="active" spy={true} smooth={true} offset={-10} duration={300}>
                            Work
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team" activeClass="active" spy={true} smooth={true} offset={-10} duration={300}>
                            Team
                        </NavLinks>
                    </NavItem>
<<<<<<< HEAD
                    <NavItem>
                        <NavLinks to="testimonials" activeClass="active" spy={true} smooth={true} offset={-10} duration={300}>
                            Testimonials
                        </NavLinks>
                    </NavItem>
=======

>>>>>>> 4e4483cc308c79379c29834183a8e37a14fb780e

                </NavMenu>
                <NavButton >
                    Have a chat
                </NavButton>
            </NavContainer>
        </Nav>
    )
}

export default index
