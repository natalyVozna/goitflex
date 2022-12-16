// import { Button } from 'components/Button/Button';
import { Loader } from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import { NotFound } from "../../components/NotFound/NotFound";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { useFetch } from "../../hooks/useFetch";
import { useCallback, useRef } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "../../services/api";
import { Gallery, Container } from "./Movies.styled";
import Banner from "../../components/Banner/Banner";
import requests from "../../services/requests";
import Row from "../../components/Row/Row";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  // const page = searchParams.get("page") ?? 1;
  const [fetchUrl, setFetchUrl] = useState(searchParams.get("query") ?? "");
  const galleryRef = useRef();

  // const getMovies = useCallback((params) => {
  //   getMovieByQuery(params)
  //     .then((resMovies) => {
  //       if (resMovies.results.length === 0) {
  //         setError("Nothing found");
  //       }
  //       if (resMovies.page !== 1) {
  //         setMovies((prev) => [...prev, ...resMovies.results]);
  //       } else {
  //         setMovies(resMovies.results);
  //         // setTotalPages(resMovies.total_pages);
  //       }
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(setLoading(false));
  // }, []);

  // const [fetchData, isLoading, isError] = useFetch(getMovies);

  // useEffect(() => {
  //   if (movies.length > 0) {
  //     if (galleryRef.current) {
  //       window.scrollTo({
  //         top: galleryRef.current.getBoundingClientRect().height + 100,
  //         left: 100,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, [movies]);

  useEffect(() => {
    if (query !== "") {
      setLoading(true);
      // fetchData({ query });
      setFetchUrl(requests.searchMovies(query));
    } else {
      // setMovies([]);
      setError("");
      // setTotalPages(1);
    }
  }, [query]);

  const notFoundSearch = (res) => {
    console.log("res", res);
    if (res) {
      setError("No results found for your query");
    } else {
      setError("");
    }
  };
  // console.log(fetchUrl, "fetchUrl", notFoundSearch);

  // if (isLoading || loading) {
  //   return <Loader />;
  // }
  // if (isError) {
  //   return <NotFound text="An error occturred, please try again" />;
  // }

  return (
    <Container>
      <Banner />
      <Searchbar />
      {error ? (
        <NotFound text="No results found for your query" />
      ) : (
        <>
          {query && (
            <Row
              title="Search results"
              notFoundSearch={notFoundSearch}
              fetchUrl={fetchUrl}
              isLargeRow={true}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Movies;
