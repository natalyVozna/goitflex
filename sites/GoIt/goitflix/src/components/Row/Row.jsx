import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import instance from "../../services/axios";
import css from "./Row.module.css";
import { useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow, notFoundSearch }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
        if (request.data.results.length === 0) {
          notFoundSearch(true);
        }
        notFoundSearch(false);
        return request;
      } catch {
        console.log("error");
      }
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

  return (
    <div className={css.row}>
      <h2>{title}</h2>
      <div className={css.row__posters}>
        {movies?.map((movie) => (
          // <img
          //   key={movie.id}
          //   className={`${css.row__poster} ${
          //     isLargeRow && css.row__posterLarge
          //   }`}
          //   src={`${base_url}${
          //     isLargeRow ? movie.poster_path : movie.backdrop_path
          //   }`}

          // />

          <MovieCard
            key={movie.id}
            title={movie.title}
            id={movie.id}
            url={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            isLargeRow={isLargeRow}
            handleClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
