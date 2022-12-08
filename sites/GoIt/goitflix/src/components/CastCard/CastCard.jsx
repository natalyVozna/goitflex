import { Container, Cover, Text, NavItem } from './CastCard.styled';
import PropTypes from 'prop-types';
import defaultImg from '../../images/defaultImg.jpeg';

export const CastCard = ({ url, name, character, popularity }) => {
  return (
    <Container>
      <NavItem>
        <Cover
          src={
            url !== null
              ? `https://image.tmdb.org/t/p/original/${url}`
              : defaultImg
          }
          alt={name}
        />
      </NavItem>
      <Text>{name}</Text>
      <Text>{character}</Text>
      <Text>Popularity: {Math.round(popularity)}%</Text>
    </Container>
  );
};

CastCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
  popularity: PropTypes.number,
};
