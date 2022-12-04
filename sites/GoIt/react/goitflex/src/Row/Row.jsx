import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import instance from "../js/axios";
import requests from "../js/requests";
import css from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("phWxA89Dy94");
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchMovie();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log("click", movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original_title || "")
        .then((url) => {
          console.log("then", url, movie?.name, movie);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log("trailerUrj", trailerUrl);

  return (
    <div className={css.row}>
      <h2>{title}</h2>
      <div className={css.row__posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`${css.row__poster} ${
              isLargeRow && css.row__posterLarge
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
