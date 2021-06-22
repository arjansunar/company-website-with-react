import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 600px;
  height: 250px;
  background: ${({ bg }) => (bg ? bg : "#ddedff")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border-radius: 0 2rem 0 2rem; */
  flex-direction: ${({ imgLeftPos }) => (imgLeftPos ? "row-reverse" : "row")};
  border-radius: ${({ imgLeftPos }) =>
    imgLeftPos ? "2rem 0 2rem 0" : "0 2rem 0 2rem"};

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 500px;
    width: 300px;
    justify-content: center;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  max-width: 55%;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 700px) {
    margin-top: 1rem;
    justify-content: space-around;
    max-width: 75%;
    height: 60%;
  }
`;
export const CardTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  position: relative;
  text-transform: capitalize;
  &::after {
    content: "";
    position: absolute;
    width: 25%;
    height: 3px;
    border-radius: 1px;
    background: #19b8af;
    bottom: -1.8rem;
    left: 0;
  }
`;
export const CardDescription = styled.p`
  font-size: 1.1rem;
  color: #6a717a;
`;
export const CardImageContainer = styled.div``;
export const CardImage = styled.img`
  max-width: 150px;
`;
