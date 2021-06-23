import styled from 'styled-components'

export const HeroContainer = styled.section`
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 10% 15% 5%;
    background: linear-gradient(295.03deg, #3A61BD 12.79%, #372F71 91.46%);
    clip-path: ellipse(76% 75% at 50% 24%);
    
    /* overflow-x: hidden; */

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding-top: 6rem;
        /* height: fit-content; */
        clip-path:ellipse(100% 52.83% at 50% 42.93%);
    }
    @media screen and (max-width: 700px){
        padding-left: 2rem;
    }
    overflow-x: hidden;
`

export const HeroText = styled.div`
    color:#fff;
    font-family: sans-serif;
    position: relative;
    top:-10%;
    flex:3;
    display:flex;
    flex-direction: column; 
    max-width: 450px;

    @media screen and (max-width: 900px) {
        position: static;
    }
`
export const HeroHeading = styled.h1`
    font-size: 3rem;
    max-width: 300px;
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 1.4rem; 
    line-height: 3.2rem;

    @media screen and (max-width: 1300px) {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.2rem; 
        line-height: 2.5rem;
        
    }
`

export const HeroParagraph = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 2rem;
`
export const HeroImage = styled.img`
    flex:1;
    max-width: 450px;
    width: auto;
    height: auto;
    position: relative;
    top:-10%;

    @media screen and (max-width: 1200px) {
        margin-top: 3rem;    
    }

    @media screen and (max-width: 700px) {
        width: 350px;
        /* height: 80%; */
    }

`


