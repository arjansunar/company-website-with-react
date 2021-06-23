import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 380px;
  height: 420px;
  display: flex;
  margin: 4rem 0;
  align-items: center;
  justify-content: center;
  position: relative;  
  border-radius: 1rem;
  box-shadow: 0px 3px 9px 0px #00000033;
  @media screen and (max-width : 450px){
      padding-top: 3rem;
      height: 450px;
      margin: 4rem 0.5rem;
    }
`;
export const CardProfileWrapper = styled.div`
    width:100px;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top:0;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 0px 5px 12px 0px #00000033;
    -webkit-box-shadow: 0px 5px 12px 0px #00000033;
    -moz-box-shadow: 0px 5px 12px 0px #00000033;

    @media screen and (max-width : 450px){
      width: 80px;
      height: 80px;
    }
`
export const CardProfileImage = styled.img`
    width: 100%;
`;

export const CardTextWrapper = styled.div`
  /* border: 1px solid red; */
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const CardName = styled.h3`
    font-family: sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (max-width : 450px){
      text-align: center;
    }

`;
export const CardTitle = styled.h6`
font-family: sans-serif;
font-size: 0.8rem;
font-style: normal;
font-weight: 600;
line-height: 1.2rem;
letter-spacing: 0.03em;
text-align: left;
color: #00000080;


`;
export const CardImage = styled.img`
    width: 45px;
`;
export const CardDesc = styled.p`
  font-family: sans-serif;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.2rem;
letter-spacing: 0em;
text-align: center;
color: #000000B2;


`;
