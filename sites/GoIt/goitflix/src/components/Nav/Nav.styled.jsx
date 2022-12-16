import styled from "styled-components";

export const Navigation = styled.nav`
  /* display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #111; */

  position: absolute;
  top: 0;
  /* width: 100%; */
  /* padding: 20px; */
  /* height: 30px; */
  z-index: 1;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  /*  Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;
