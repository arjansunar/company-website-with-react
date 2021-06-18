import styled from 'styled-components'

export const HeroContainer = styled.section`
    height: calc(100% - 80px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5% 10%;
    /* overflow-x: hidden; */

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        height: calc(100vh- 160px);
    }
    @media screen and (max-width: 748px){
        padding: 10% 15%;
    }
    overflow-x: hidden;
`

export const HeroText = styled.div`
    font-family: 'Inter', sans-serif;
    position: relative;
    top:-10%;
    flex:3;
    display:flex;
    flex-direction: column; 
    max-width: 600px;

    @media screen and (max-width: 900px) {
        position: static;
    }
`
export const HeroHeading = styled.h1`
    letter-spacing: -0.2rem;
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1.4rem; 
    line-height: 6rem;
    @media screen and (max-width: 1300px) {
        letter-spacing: 0rem;
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1.2rem; 
        line-height: 4rem;
        
    }
`

export const HeroParagraph = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 2rem;
`
export const HeroImage = styled.img`
    flex:1;
    width: auto;
  height: auto;

    @media screen and (max-width: 600px) {
        width: 400px;
        /* height: 80%; */
    }

`


