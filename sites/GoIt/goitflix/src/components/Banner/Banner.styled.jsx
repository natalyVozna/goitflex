import styled from "styled-components";

export const BannerStyle = styled.section`
  color: #ffffff;
  object-fit: contain;
  height: 448px;
`;
export const Contents = styled.div`
  margin-left: 20px;
  padding-top: 140px;
  height: 190px;
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
export const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  transition: color 0.2s, background-color 0.2s;

  @media screen and (max-width: 480px) {
    padding: 0.3rem 1.7rem;
  }

  :hover {
    color: #000;
    background-color: #e6e6e6;
  }
`;
export const Descriptions = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;
export const FadeBottom = styled.div`
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
