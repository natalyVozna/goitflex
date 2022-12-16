import { useEffect, useState } from "react";
import instance from "../../services/axios";
import requests from "../../services/requests";
import css from "./Banner.module.css";
import {
  BannerStyle,
  Title,
  Contents,
  BannerButton,
  Descriptions,
} from "./Banner.styled";

const Banner = ({ movieId }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = movieId
        ? requests.fetchMovieDetails(movieId)
        : requests.fetchNetflixOriginals;

      // const request = await instance.get(requests.fetchNetflixOriginals);
      const result = await instance.get(request);
      let randomNum = null;
      if (!movieId) {
        randomNum = Math.floor(Math.random() * result.data.results.length - 1);
      }

      setMovie(movieId ? result.data : result.data.results[randomNum]);
      return request;
    }

    fetchMovie();
  }, [movieId]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <BannerStyle
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center",
      }}
    >
      <Contents>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        <div>
          <BannerButton className={css.banner__button}>Play</BannerButton>
          <BannerButton className={css.banner__button}>My list</BannerButton>
        </div>
        <Descriptions>{truncate(movie?.overview, 150)}</Descriptions>
      </Contents>

      <div className={css["banner--fadeBottom"]}></div>
    </BannerStyle>
  );
};

export default Banner;
