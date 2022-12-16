import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 20px;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  /*  Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const NavBox = styled.nav`
  margin: 0 auto;
  max-width: 1340px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[6]}px;
  font-size: 24px;
  line-height: 1;

  @media screen and (max-width: 480px) {
    gap: ${(p) => p.theme.space[5]}px;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.space[2]}px;
  font-size: 19px;
  line-height: 1;
  color: var(--red);
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  transition: border 250ms ${(props) => props.theme.colors.timingFunction},
    color 250ms ${(props) => props.theme.colors.timingFunction};

  &.active {
    color: ${(p) => p.theme.colors.white};
    background-color: rgba(17, 17, 17, 0.4);
    border: 1px solid ${(p) => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border-bottom: 2px solid ${(p) => p.theme.colors.red};
  }

  @media screen and (max-width: 480px) {
    padding: ${(p) => p.theme.space[2]}px;
    font-size: 17px;
  }
`;

export const Container = styled.div`
  font-family: ${(p) => p.theme.fonts.body};
  padding: 40px;
  height: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
  background-color: rgba(17, 17, 17, 0.4);
  width: 80px;
  height: 60px;
  /* width: 4rem;
  height: 3.5rem; */
  text-decoration: none;
  box-shadow: 1px 1px 6px rgba(17, 17, 17, 0.2);

  svg {
    width: 30px;
    height: 36px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 50px;
    svg {
      width: 20px;
      height: 26px;
    }
  }
`;

export const LogoText = styled.span`
  font-size: 18px;
  /* font-size: 0.9rem; */
  font-weight: 700;
  color: #d81f26;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
