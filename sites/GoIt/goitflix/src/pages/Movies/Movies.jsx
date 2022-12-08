// import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { NotFound } from 'components/NotFound/NotFound';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useFetch } from 'hooks/useFetch';
import { useCallback, useRef } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import { Gallery, Container } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;
  const galleryRef = useRef();

  const getMovies = useCallback(params => {
    getMovieByQuery(params)
      .then(resMovies => {
        if (resMovies.results.length === 0) {
          setError('Nothing found');
        }
        if (resMovies.page !== 1) {
          setMovies(prev => [...prev, ...resMovies.results]);
        } else {
          setMovies(resMovies.results);
          // setTotalPages(resMovies.total_pages);
        }
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, []);

  const [fetchData, isLoading, isError] = useFetch(getMovies);

  useEffect(() => {
    if (movies.length > 0) {
      if (galleryRef.current) {
        window.scrollTo({
          top: galleryRef.current.getBoundingClientRect().height + 100,
          left: 100,
          behavior: 'smooth',
        });
      }
    }
  }, [movies]);

  useEffect(() => {
    if (query !== '') {
      setLoading(true);
      fetchData({ query, page });
    } else {
      setMovies([]);
      setError('');
      // setTotalPages(1);
    }
  }, [fetchData, query, page]);

  if (isLoading || loading) {
    return <Loader />;
  }
  if (isError) {
    return <NotFound text="An error occturred, please try again" />;
  }

  // const onLoadMore = () => {
  //   setSearchParams({ page: +page + 1, query });
  // };

  // const isShowBtn = page < totalPages;

  return (
    <Container>
      <Searchbar />
      {movies?.length === 0 && error ? (
        <NotFound text="Nothing found" />
      ) : (
        <>
          <Gallery ref={galleryRef}>
            {movies?.map(({ title, id, poster_path }) => (
              <MovieCard key={id} title={title} id={id} url={poster_path} />
            ))}
          </Gallery>
          {/* {isShowBtn && <Button onClickHandle={onLoadMore}>Load More</Button>} */}
        </>
      )}
    </Container>
  );
};

export default Movies;
