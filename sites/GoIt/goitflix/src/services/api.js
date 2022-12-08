import axios from 'axios';

const key = 'e9cee7be5a008a68e4280761266315f1';
const fetchApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    page: 1,
  },
});

export const getTrendingMovies = async (type = 'movie', time = 'day') => {
  const { data } = await fetchApi.get(
    `trending/${type}/${time}?api_key=${key}`
  );

  return data;
};
export const getFullInfoAboutMovie = async movie_id => {
  const { data } = await fetchApi.get(`movie/${movie_id}?api_key=${key}`);
  return data;
};
export const getMovieByQuery = async params => {
  const { data } = await fetchApi.get(`search/movie?api_key=${key}`, {
    params,
  });

  return data;
};
export const getActors = async movie_id => {
  const { data } = await fetchApi.get(
    `movie/${movie_id}/credits?api_key=${key}`
  );

  return data;
};
export const getReviews = async movie_id => {
  const { data } = await fetchApi.get(
    `movie/${movie_id}/reviews?api_key=${key}`
  );

  return data;
};
