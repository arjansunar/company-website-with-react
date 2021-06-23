import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export const CardWrapper = styled.div`
  max-width: 350px;
  min-width: 250px;
  margin-bottom: 2rem;
  height: 480px;
  border-radius: 1rem;
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: -7px 10px 12px 0px rgba(219, 219, 219, 0.75);
  position: relative;

  &::after {
    display: ${({ hover }) => (hover ? "block" : "none")};
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(55, 109, 192, 0.78);
    border-radius: 25px 25px 0 0;
    clip-path: polygon(0 0, 100% 0, 100% 72%, 0 85%);
  }
  &::before {
    content: " ";
    background: rgba(105, 190, 208, 50%);
    /* height: 100px;
    width: 100px; */
    position: absolute;
    top: 40%;
    left: 35%;
    bottom: 2rem;
    right: 0;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
`;
export const CardSocialLinks = styled.div`
  position: absolute;
  height: 25%;
  /* width: fit-content; */
  display: ${({ hover }) => (hover ? 'flex' : 'none')};
  width: 40px;
  top: 2rem;
  flex-direction: column;
  justify-content: space-between;
  /* background: #fff; */
  margin-left: 1.5rem;
  z-index: 2;
`;

export const CardSocialIcon = styled(SocialIcon)`
  & .social-svg-mask {
    fill: #fff !important;
  }
`;

export const CardDescWrapper = styled.div`
  height: 135px;
  width: 100%;
  background: #fff;
  clip-path: polygon(0 45%, 100% 0, 100% 100%, 0% 100%);
  position: absolute;
  bottom: 0;
  border-radius: 0 0 1rem 1rem;
`;
export const CardTextWrapper = styled.div`
  height: 35%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 1.5rem;
`;
export const CardName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0;
`;
export const CardTitle = styled.h4`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: #3a6dd0;
  margin: 0;
`;
