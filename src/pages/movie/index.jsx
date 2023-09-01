import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../utilities/apiService";

import "./styles.scss";
import MovieDetails from "../../components/ui/movieDetails";
import HighlightCarousel from "../../components/ui/highlightCarousel";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);
  useMemo(() => {
    apiService.getById("movie", id, "credits,videos").then((response) => {
      setMovie({
        ...response,
        credits: response.credits.crew.filter(({ job }) => job === "Director"),
        videos: response.videos.results.filter(
          ({ type, site }) => type === "Trailer" && site == "YouTube"
        ),
      });
    });
  }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <MovieDetails movie={movie} />
          <main>
            <HighlightCarousel
              title={"You might also like"}
              endpoint={`/movie/${movie.id}/similar`}
            />
          </main>
        </>
      ) : null}
    </div>
  );
};
export default MoviePage;
