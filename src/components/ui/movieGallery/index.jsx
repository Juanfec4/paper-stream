import HighlightCard from "../highlightCard";
import "./styles.scss";

const MovieGallery = ({ movies, page, pageControls }) => {
  const [nextPage, prevPage] = pageControls;

  return (
    <>
      <div className="movie-gallery">
        {movies
          ? movies.map((movie) => {
              return <HighlightCard movie={movie} key={movie.id} />;
            })
          : null}
      </div>
      <div className="movie-gallery__pagination">
        <button
          className="movie-gallery__button"
          onClick={() => {
            prevPage(page);
          }}
        >
          Prev
        </button>
        <h3 className="movie-gallery__page">{page}</h3>
        <button
          className="movie-gallery__button"
          onClick={() => {
            nextPage(page);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default MovieGallery;
