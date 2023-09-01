import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import apiService from "../../utilities/apiService";
import MovieGallery from "../../components/ui/movieGallery";

const CategoryPage = () => {
  const { id } = useParams();
  const {
    state: { name },
  } = useLocation();
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiService.getByGenre("/discover/movie", id, page).then((response) => {
      setMovies(response);
    });
  }, [id, page]);

  const pageControls = [
    (p) => {
      if (p + 1 < movies.total_pages) setPage(p + 1);
    },
    (p) => {
      if (p - 1 !== 0) {
        setPage(p - 1);
      }
    },
  ];

  return (
    <section>
      <main>
        {movies ? (
          <>
            <h1 className="section__title">{name}</h1>
            <MovieGallery movies={movies.results} page={page} pageControls={pageControls} />
          </>
        ) : null}
      </main>
    </section>
  );
};
export default CategoryPage;
