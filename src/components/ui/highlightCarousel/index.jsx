import { useEffect, useRef, useState } from "react";
import apiService from "../../../utilities/apiService";
import HighlightCard from "../highlightCard";

import chevronLeft from "../../../assets/icons/chevron-left.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";

import "./styles.scss";
import ProgressBar from "../progressBar";
const HighlightCarousel = ({ title, endpoint, page }) => {
  const [movies, setMovies] = useState(undefined);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {
    apiService.getAll(endpoint, page).then((response) => {
      setMovies(response.results);
    });
  }, [endpoint]);

  const updateMaxScroll = () => {
    return setMaxScroll(
      (carouselRef.current.scrollWidth - carouselRef.current.offsetWidth) /
        carouselRef.current.scrollWidth
    );
  };

  useEffect(() => {
    carouselRef.current.scrollLeft = scrollPercentage * carouselRef.current.scrollWidth;
  }, [scrollPercentage]);

  const handleNextScroll = () => {
    setScrollPercentage((prev) => prev + 900 / carouselRef.current.scrollWidth);
  };

  const handlePrevScroll = () => {
    setScrollPercentage((prev) => prev - 900 / carouselRef.current.scrollWidth);
  };
  return (
    <section>
      <h2 className="section__title">{title}</h2>
      <div className="highlight-carousel">
        <button
          className="highlight-carousel__button--prev"
          onClick={handlePrevScroll}
          style={scrollPercentage < 0.2 ? { visibility: "hidden" } : {}}
        >
          <img src={chevronLeft} className="highlight-carousel__button-icon" />
        </button>
        <button
          className="highlight-carousel__button--next"
          onClick={handleNextScroll}
          style={scrollPercentage > 0.72 ? { visibility: "hidden" } : {}}
        >
          <img src={chevronRight} className="highlight-carousel__button-icon" />
        </button>
        <div className="highlight-carousel__content" ref={carouselRef} onLoad={updateMaxScroll}>
          {movies ? (
            <>
              {movies.map((movie) => {
                return <HighlightCard movie={movie} key={movie.id} />;
              })}
            </>
          ) : null}
        </div>
      </div>
      <ProgressBar percentage={scrollPercentage} total={maxScroll} />
    </section>
  );
};

export default HighlightCarousel;
