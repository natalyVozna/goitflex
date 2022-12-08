import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const Author = styled.span`
  font-size: 22px;
  line-height: 1.6;
  font-weight: ${p => p.theme.fontWeight.bold};
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
  padding-left: 10px;
`;
