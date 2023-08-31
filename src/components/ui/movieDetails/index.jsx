import "./styles.scss";
import formatters from "../../../utilities/formatters";
import playIcon from "../../../assets/icons/player-play-filled.svg";
import Stars from "../stars";
import IconButton from "../iconButton";
const MovieDetails = ({ movie }) => {
  console.log(movie);
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_API_IMAGE_URL + movie.backdrop_path})`,
      }}
      className="movie-details__container"
    >
      <div className="movie-details__content">
        <img
          src={import.meta.env.VITE_API_IMAGE_URL + movie.poster_path}
          className="movie-details__movie-poster"
        />
        <div className="movie-details__box">
          <h1 className="movie-details__movie-title">
            {movie.title}{" "}
            <span className="movie-details__movie-year">{`(${movie.release_date.slice(
              0,
              4
            )})`}</span>{" "}
            <Stars rating={movie.vote_average} />
          </h1>
          <span className="movie-details__movie-misc-info">
            <div className="movie-details__movie-genre-list">
              {movie.genres.map((genre) => {
                return (
                  <div key={genre.id} className="movie-details__genre-element">
                    <span className="movie-details__dot">&#x2022;</span>
                    <span className="movie-details__genre-text">{genre.name}</span>
                  </div>
                );
              })}
            </div>
            <span>|</span>
            <span>{formatters.formatDuration(movie.runtime)}</span>
          </span>
          <h3 className="movie-details__subtitle">Overview</h3>
          <p className="movie-details__movie-description">{movie.overview}</p>
          <ul className="movie-details__person-list">
            {movie.credits.map((director) => {
              return (
                <li key={director.id} className="movie-details__person-element">
                  <h4 className="movie-details__element-title">{director.name}</h4>
                  <p className="movie-details__element-label">{director.known_for_department}</p>
                </li>
              );
            })}
          </ul>
          {movie.videos.length ? (
            <IconButton
              text={"Watch Trailer"}
              icon={playIcon}
              link={`https://www.youtube.com/watch?v=${movie.videos[0].key}`}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
