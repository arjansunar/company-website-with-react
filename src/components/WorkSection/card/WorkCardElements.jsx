import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  max-width: 280px;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  width: 100%;
  color: #fff;
  text-transform: capitalize;
  position: absolute;
  bottom: 1rem;
  /* left: 50%;
  transform: translateX(-50%); */

  display: ${({ hover }) => (hover ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;
export const CardDescWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 1rem;
  display: ${({ hover }) => (hover ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.85);
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardH = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  width: fit-content;
  color: #fff;
  text-transform: capitalize;
`;
export const CardP = styled.p`
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
  width: fit-content;
  color: #fff;
`;
