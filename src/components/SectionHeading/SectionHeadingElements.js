import styled from "styled-components";

export const SectionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 10% 0% 10%;
  @media screen and (max-width: 1000px) {
        padding-top: 6rem;
    }
`;

export const SectionText = styled.div`
  display: flex;
  height: 30%;
  padding: 0 10%;
  /* border: 2px solid black; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

export const SectionP = styled.p`
  font-size: 1rem;
  margin: 5% 0;
  width:  70%;
`;

export const SectionTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 0;
    margin-bottom: 1.4rem; 
    line-height: 4rem;
  position: relative;

  &::after {
    content: " ";
    position: absolute;
    height: 10px;
    width: 30%;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    background: blue;
  }
`;

export const SectionTag = styled.h3`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: blue;
  line-height: 4rem;

`;
