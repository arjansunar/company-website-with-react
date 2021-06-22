import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { SocialIcon } from "react-social-icons";

export const FooterContainer = styled.div`
  background: #1C1C1E; 
  /* ${(dark) => (dark ? "#3D6567" : "#1C1C1E")}; */
  width: 100%;
  height: 256px;
  display: flex;
  margin-top: 9rem;;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  
  /* position: absolute;
  bottom: 0; */
  color: #dadada;

`;

export const FooterLogo = styled.div`
  transform: translateX(-50%);
`;
export const FooterLinkWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  & > * {
    margin-right: 20px;
  }

  &::after {
    content: " ";
    height: 1px;
    width: 70vw;
    background: rgb(220 219 219 / 73%);
    position: absolute;
    bottom: -3.5rem;
  }
`;
export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FooterLink = styled(LinkS)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  list-style: none;
  margin-top: 20px;
  transition: 0.2s ease-in-out;
  color: #dadada;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  @media screen and (min-width: 780px) {
    font-size: 1rem;
  }
`;

export const FooterCopyrightSection = styled.div`
  width: 70%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column-reverse;

  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 1rem 0;
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;
    & > * {
      margin: 0;
    }
  }
`;

export const CopyrightText = styled.h6`
  /* height: 100%; */
  margin: 0;
  font-size: 0.6rem;
  color: #dadada;

  @media screen and (min-width: 780px) {
    font-size: 0.8rem;
  }
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  font-size: 0.6rem;
  & > * {
    margin-right: 20px;
  }
`;

export const FooterSocialIcon = styled(SocialIcon)`
  & .social-svg-mask {
    fill: #dadada !important;
  }
`;
