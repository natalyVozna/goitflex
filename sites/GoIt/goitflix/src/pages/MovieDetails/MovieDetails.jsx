import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  NavItem,
  SectionInfo,
  GoBack,
  Img,
  Container,
  Cover,
  InfoBox,
  Title,
  SubTitle,
  Text,
  AdditionalSection,
  LinkBox,
} from './MovieDetails.styled';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { getFullInfoAboutMovie } from 'services/api';
import { useFetch } from 'hooks/useFetch';
import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const getData = useCallback(params => {
    getFullInfoAboutMovie(params).then(
      ({
        title,
        id,
        poster_path: url,
        vote_average,
        overview,
        genres,
        backdrop_path,
      }) => {
        const score = Math.round(vote_average * 10);
        const allGenres = genres.map(genre => genre.name).join(' ');
        setMovie({
          title,
          id,
          url,
          score,
          allGenres,
          overview,
          backdropUrl: backdrop_path,
        });
        setLoading(false);
      }
    );
  }, []);

  const [fetchData, isLoading, isError] = useFetch(getData);

  useEffect(() => {
    fetchData(movieId);
  }, [fetchData, movieId]);

  if (isLoading || loading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  if (!movie && !loading) {
    const text = 'No match';
    return <NotFound text={text} />;
  }

  return (
    <Container>
      <>
        <SectionInfo
          url={`https://image.tmdb.org/t/p/original/${movie.backdropUrl}`}
        >
          <GoBack to={location?.state ? location.state.from : '/'}>
            &#8592; Go back
          </GoBack>
          <Cover>
            <Img
              src={`https://image.tmdb.org/t/p/original/${movie.url}`}
              alt={movie.title}
              width="200"
            />
          </Cover>
          <InfoBox>
            <Title>{movie.title}</Title>
            <Text>
              <b>User Score:</b> {movie.score}%
            </Text>
            <SubTitle className="overview">Overview</SubTitle>
            <Text>{movie.overview}</Text>
            <SubTitle className="genres">Genres</SubTitle>
            <p>{movie.allGenres}</p>
          </InfoBox>
        </SectionInfo>
        <AdditionalSection className="additional">
          <Title>Additional information</Title>

          <LinkBox>
            {navItems.map(({ href, text }) => (
              <NavItem to={href} key={href} state={location.state}>
                &#10139; &nbsp;<span>{text}</span>
              </NavItem>
            ))}
          </LinkBox>
        </AdditionalSection>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </Container>
  );
};

export default MovieDetails;
