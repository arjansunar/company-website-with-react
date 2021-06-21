import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    height:80px;
    /* margin-top: -80px; */
    width: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0; 
    z-index:10;
    overflow: hidden;
    background: #fff;
    border-bottom: 2px  solid black;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

   

`

export const Logo = styled(LinkR)`
    color:#000;
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
    
    /* &::after {
    content: " ";
    height: 2px;
    width: 100%;
    background: red;
    position: absolute;
    bottom: -2.5rem;
  } */
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
        color: #000;
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

   

    @media screen and (max-width: 768px){
        display: none;
    }

    
`
export const NavItem = styled.div`
    
    /* height: 80px; */
`
export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`