import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% - 130px) / 6);
  justify-content: flex-start;
  height: auto;
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  border-radius: ${p => p.theme.space[2]}px;
  transition: transform 250ms ${props => props.theme.colors.timingFunction};

  :hover:not(.active),
  :focus-visible:not(.active) {
    transform: scale(1.05);
  }
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: ${p => p.theme.space[2]}px;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  line-height: 1;
  text-decoration: none;
`;
export const Text = styled.p`
  font-size: ${p => p.theme.fontSize.s}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  padding: 8px;
`;
