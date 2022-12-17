import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  max-height: 100px;
  min-width: 165px;
  /* height: ${(p) => (p.isLargeRow ? "250px" : "100px")}; */
  /* max-height: 100px; */
  max-height: ${(p) => (p.isLargeRow ? "250px" : "100px")};
  margin-right: 10px;
  transition: transform 350ms;

  :hover {
    transform: scale(${(p) => (p.isLargeRow ? "1.09" : "1.08")});
    /* transform: scale(1.08); */
  }

  svg {
    position: absolute;
    z-index: 10;
    cursor: progress;
    z-index: 6;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    transition: transform 350ms;

    :hover {
      box-shadow: 1px 1px 4px rgba(216, 31, 38, 0.4);
    }
  }
`;

export const Cover = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-height: 100px;
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  line-height: 1;
  text-decoration: none;
`;
export const Title = styled.p`
  font-size: ${(p) => p.theme.fontSize.m}px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  padding: 8px;
  min-height: 70px;
`;
