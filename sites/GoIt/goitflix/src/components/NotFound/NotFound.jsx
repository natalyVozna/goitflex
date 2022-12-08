import { Container, Title } from './NotFound.styled';
export const NotFound = ({ text = 'Not found' }) => {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};
