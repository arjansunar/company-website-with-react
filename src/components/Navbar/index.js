import React from 'react'
import { Nav, NavContainer, Logo, MobileIcon, NavItem, NavLinks, NavMenu } from "./NavbarElements"
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
                        <NavLinks to="services">
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">
                            Contact
                        </NavLinks>
                    </NavItem>

                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default index
