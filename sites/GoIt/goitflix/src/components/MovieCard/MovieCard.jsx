import { Container, NavItem, Cover, Title } from "./MovieCard.styled";
import PropTypes from "prop-types";
import defaultImg from "../../images/defaultImg.jpeg";
import { useLocation } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../images/play.svg";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({
  title = "title",
  id,
  url,
  backdrop_path,
  isLargeRow = false,
  handleClick,
}) => {
  const location = useLocation();

  return (
    <>
      <Container isLargeRow>
        <PlayIcon onClick={handleClick} />
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img
            src={`${base_url}${isLargeRow ? url : backdrop_path}`}
            alt={title}
          />
        </Link>
      </Container>
    </>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
};
export default MovieCard;
