import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  color: ${(p) => p.theme.colors.white};
  @media screen and (max-width: 480px) {
    padding: 30px 20px;
  }
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 20px;
  max-width: 100%;
`;

export const Author = styled.span`
  font-size: 22px;
  line-height: 1.6;
  font-weight: ${(p) => p.theme.fontWeight.bold};
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
  padding-left: 10px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
