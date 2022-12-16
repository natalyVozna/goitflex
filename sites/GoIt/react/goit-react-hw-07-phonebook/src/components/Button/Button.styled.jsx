import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 10px 30px;
  align-self: flex-start;
  border-radius: 20px;
  font-weight: 700;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: var(--white);
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgb(0, 172, 193) 100%
  );
  box-shadow: 1px 1px 3px 0px rgba(33, 33, 33, 0.7);
  transition: box-shadow 250ms var(--timing-function);

  :hover {
    box-shadow: 1px 2px 6px 1px rgb(33, 33, 33);
  }

  svg {
    width: 22px;
    height: 22px;
    margin-right: 5px;
    position: relative;
    z-index: -1;
  }
`;
