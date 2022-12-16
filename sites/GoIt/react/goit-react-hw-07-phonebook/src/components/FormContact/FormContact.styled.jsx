import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const LabelInput = styled.label`
  margin-bottom: 2px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text);
`;

export const InputStyled = styled.input`
  cursor: pointer;
  margin: 0;
  padding: 6px 12px;
  font: inherit;
  background: #ffffff;
  border: 1px solid rgba(0, 172, 193, 0.12);
  box-shadow: 0px 1px 2px rgba(0, 172, 193, 0.15);
  border-radius: 20px;
  height: 40px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  transition: border 250ms var(--timing-function);

  &::placeholder {
    color: var(--dark-gray);
  }

  &:focus:invalid {
    border: 1px solid var(--red);
  }
  :valid {
    border: 1px solid rgba(84, 58, 183, 0.5);
  }
`;
