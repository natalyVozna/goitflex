import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  font-family: ${p => p.theme.fonts.body};
  padding: 20px 40px;
  display: flex;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgba(248, 197, 197, 0.2);
`;

export const NavBox = styled.nav`
  margin: 0 auto;
  max-width: 1340px;
  width: 100%;
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  font-size: 24px;
  line-height: 1;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[2]}px;
  font-size: 24px;
  line-height: 1;
  text-decoration: none;
  transition: background-color 250ms
      ${props => props.theme.colors.timingFunction},
    color 250ms ${props => props.theme.colors.timingFunction};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Container = styled.div`
  font-family: ${p => p.theme.fonts.body};
  padding: 40px;
  height: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;
