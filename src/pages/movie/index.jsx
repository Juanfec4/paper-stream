import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../utilities/apiService";

import "./styles.scss";
import MovieDetails from "../../components/ui/movieDetails";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);
  useEffect(() => {
    apiService.getById("movie", id, "similar,credits,videos").then((response) => {
      setMovie({
        ...response,
        credits: response.credits.crew.filter(({ job }) => job === "Director"),
        videos: response.videos.results.filter(
          ({ type, site }) => type === "Trailer" && site == "YouTube"
        ),
      });
    });
  }, []);

  return <div>{movie ? <MovieDetails movie={movie} /> : null}</div>;
};
export default MoviePage;
