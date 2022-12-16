import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../images/search-left.svg';

export const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:last-child {
    margin-bottom: 32px;
  }
`;
export const LabelInput = styled.label`
  margin-bottom: 2px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text);
`;
export const SearchLabel = styled(SearchIcon)`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 22px;
  height: 24px;

  fill: ${p => (p.disabled ? '#afb1b8' : '#2c2c2c')};
`;

export const InputStyled = styled.input`
  margin: 0;
  padding: 6px 0 6px 36px;
  font: inherit;
  background: #ffffff;
  border: 1px solid rgba(18, 18, 18, 0.12);
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  height: 40px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  transition: border 250ms var(--timing-function);

  &::placeholder {
    color: ${p => (p.disabled ? '#949191' : '#535456')};
  }

  &:focus:invalid {
    border: 1px solid var(--red);
  }
  :valid {
    border: 1px solid var(--dark-green);
  }
`;
