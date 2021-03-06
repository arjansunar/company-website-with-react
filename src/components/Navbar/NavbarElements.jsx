import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    height:80px;
    /* margin-top: -80px; */
    width: 100%;
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0; 
    z-index: 10;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    background: linear-gradient(295.03deg, #3A61BD 12.79%, #372F71 91.46%);

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

   

`

export const Logo = styled(LinkR)`
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    position: relative;
    
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%,40%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;  
    height: 100%;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-bottom: 0;

   
    @media screen and (max-width: 1200px){
    width: 30rem;
    }
    @media screen and (max-width: 768px){
        display: none;
    }

    
`
export const NavItem = styled.div`
    
    /* height: 80px; */
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &.active::after{
        content:'';
        height: 3px;
        position: absolute;
        bottom: -1.7rem;
        left:0;
        right:0;
        background: white;
    }
    &:hover{
        color: white;   
    }
`

export const NavButton = styled.button`
    border-radius: 10px;
    max-width: 10rem;
    background: transparent;
    white-space: nowrap;
    padding: 8px 25px;
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '14px')};
    outline: none;
    text-decoration: none;
    border: 1px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #19B8AF;
        color: #fff;
        
    }

    @media (max-width: 1000px){
        display: none;
    }
`