import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';
import { useFetch } from 'hooks/useFetch';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { Container, Item, Author, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(params => {
    getReviews(params).then(res => {
      setReviews(res.results);
      setLoading(false);
    });
  }, []);

  const [fetchData, isLoading, isError] = useFetch(getData);

  useEffect(() => {
    setLoading(true);
    fetchData(movieId);
  }, [fetchData, movieId]);

  if (isLoading || loading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  if (reviews.length === 0 && !loading) {
    const text = "We don't have any reviews";
    return <NotFound text={text} />;
  }

  return (
    <Container>
      {reviews.map(({ content, author, id }) => (
        <Item key={id}>
          <Author>&#10003; Autor: {author}</Author>
          <Text>{content}</Text>
        </Item>
      ))}
    </Container>
  );
};

export default Reviews;
