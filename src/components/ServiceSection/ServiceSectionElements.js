import styled from 'styled-components'

export const GridContainer = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > *{
    margin: 15px 20px;
  }
  @media screen and (min-width: 980px){
    flex-direction: row;
  } */

  display: grid;
  place-content: center;
  gap: ${({ gap }) => (gap ? gap : "20px")};
  grid-template-columns: ${({ cols }) => cols ? `repeat(${cols},1fr)` : "repeat(2,1fr)"};
  width: fit-content;
  margin: 0 auto;
  
  
  @media screen and (max-width: 1100px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;