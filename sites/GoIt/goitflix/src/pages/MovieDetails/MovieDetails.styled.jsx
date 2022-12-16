import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
`;

// export const SectionInfo = styled.section`
//   position: relative;
//   display: flex;
//   padding: 20px 40px;
//   align-items: center;
//   background-image: linear-gradient(
//       to right,
//       rgba(47, 48, 58, 0.4),
//       rgba(47, 48, 58, 0.4)
//     ),
//     url(${p => p.url});
//   background-size: cover;
//   background-repeat: no-repeat;
//   min-height: 400px;
//   color: ${p => p.theme.colors.white};
// `;
export const GoBack = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 10;
  top: 3px;
  left: 20px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0.2vw;
  padding: 2px;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: ${(p) => p.theme.colors.text};
    background-color: ${(p) => p.theme.colors.white};
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

// export const Cover = styled.div`
//   color: ${(p) => p.theme.colors.white};
//   background-color: transparent;
//   border: none;
//   height: 500px;
//   display: flex;
//   align-items: center;
// `;
// export const Img = styled.img`
//   display: block;
//   min-width: 300px;
//   height: auto;
//   border-width: 0px;
//   outline: none;
//   border-radius: 5px;
// `;

// export const InfoBox = styled.div`
//   color: ${(p) => p.theme.colors.white};
//   padding: ${(p) => p.theme.space[5]}px;
//   font-size: ${(p) => p.theme.fontSize.m}px;
//   font-weight: ${(p) => p.theme.fontWeight.normal};
//   line-height: 1.6;
// `;

export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSize.l}px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  margin-bottom: 15px;
`;
// export const SubTitle = styled.h2`
//   margin-bottom: 10px;
// `;
// export const Text = styled.p`
//   margin-bottom: 20px;
// `;
export const AdditionalSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.white};
  padding: 20px 40px;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const LinkBox = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: ${(p) => p.theme.space[2]}px;
  border-radius: ${(p) => p.theme.space[2]}px;
  font-size: 20px;
  line-height: 1;
  text-decoration: none;

  &.active {
    color: ${(p) => p.theme.colors.red};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${(p) => p.theme.colors.red};
  }
`;
