import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

export const Container = styled.div`
  display: flex;
  padding: 0 20px;
  width: 100%;
  position: relative;
  top: -10px;
  margin-bottom: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  width: 90px;
  height: 48px;
  border: 0;
  align-items: center;
  justify-content: center;
  /* opacity: 0.6; */
  background-color: ${(p) => p.theme.colors.red};

  :hover {
    svg {
      transform: scale(1.07);
    }
  }
`;

export const SearchLabel = styled(SearchIcon)`
  width: 26px;
  height: 28px;
  fill: var(--text);
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
