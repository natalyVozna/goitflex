import { useCallback, useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import { Container, Title, Gallery } from "./Home.styled";
// // import MovieCard from "components/MovieCard/MovieCard";
import { useFetch } from "../../hooks/useFetch";
import { NotFound } from "../../components/NotFound/NotFound";
import { Loader } from "../../components/Loader/Loader";
import Row from "../../components/Row/Row";
import requests from "../../services/requests";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(() => {
    getTrendingMovies().then((resMovies) => {
      setMovies(resMovies.results);
      setLoading(false);
    });
  }, []);

  const [fetchData, isLoading, isError] = useFetch(getData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading || loading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  if (movies?.length === 0) {
    return <NotFound text="Nothing found" />;
  }

  return (
    <Container>
      {/* <Title>Trending today</Title> */}
      {/* <Gallery>
        {movies?.map(({ title, id, poster_path }) => (
          <MovieCard key={id} title={title} id={id} url={poster_path} />
        ))}
      </Gallery> */}

      <Banner />
      <Row
        title="GOITFLIEX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Herror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </Container>
  );
};

export default Home;
