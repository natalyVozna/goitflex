import { useEffect, useState } from "react";
import instance from "../js/axios";
import requests from "../js/requests";
import css from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      const randomNum = Math.floor(
        Math.random() * request.data.results.length - 1
      );

      setMovie(request.data.results[randomNum]);
      return request;
    }

    fetchMovie();
  }, []);

  console.log("movie", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={css.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className={css.banner__contents}>
        <h1 className={css.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={css.banner__buttons}>
          <button className={css.banner__button}>Play</button>
          <button className={css.banner__button}>My list</button>
        </div>
        <p className={css.banner__descriptions}>
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      <div className={css["banner--fadeBottom"]}></div>
    </header>
  );
};

export default Banner;
