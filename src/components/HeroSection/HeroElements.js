import styled from 'styled-components'

export const HeroContainer = styled.section`
    height: calc(100vh - 80px);
    display: flex;
    justify-content: space-space-between;
    align-items: center;
    padding: 0 10%;
`

export const HeroText = styled.div`
    font-family: 'Inter', sans-serif;
    position: relative;
    top:-10%;
    flex:3;
    display:flex;
    flex-direction: column;
`
export const HeroHeading = styled.h1`
    letter-spacing: -0.2rem;
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1.4rem; 
    line-height: 6rem;
`

export const HeroParagraph = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 2rem;
`
export const HeroImage = styled.img`
    flex:1;
`

