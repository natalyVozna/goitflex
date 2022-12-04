import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// const fetchApi = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     page: 1,
//   },
// });

// export const getTrendingMovies = async (type = "movie", time = "day") => {
//   const { data } = await fetchApi.get(
//     `trending/${type}/${time}?api_key=${key}`
//   );

//   return data;
// };
