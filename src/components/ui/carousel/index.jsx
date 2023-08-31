import { useEffect, useRef, useState } from "react";
import apiService from "../../../utilities/apiService";

import "./styles.scss";
import Chevron from "../chevron";
import Dots from "../dots";
import { useNavigate } from "react-router-dom";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [movies, setMovies] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  //Get upcoming movies
  useEffect(() => {
    apiService.getAll("/movie/now_playing").then((response) => setMovies(response.results));
  }, []);

  //Go to next movie every x seconds
  useEffect(() => {
    if (movies?.length) {
      const interval = setInterval(() => {
        handleNext();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [movies, activeIndex]);

  //Go to next movie
  const handleNext = () => {
    if (activeIndex !== movies.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      setActiveIndex(0);
    }
  };

  //Go to previous movie
  const handlePrev = () => {
    if (activeIndex !== 0) {
      setActiveIndex((prev) => prev - 1);
    } else {
      setActiveIndex(movies.length - 1);
    }
  };

  //Go to movie
  const handleCLick = (id) => {
    navigate(`../movie/${id}`);
  };

  return (
    <div className="carousel">
      {movies ? (
        <>
          <h1 className="carousel__card-title">{movies[activeIndex].title}</h1>
          <div className="carousel__content">
            <Chevron direction={"left"} handleCLick={handlePrev} />
            <div key={movies[activeIndex].id} className="carousel__card">
              <div className="carousel__card-image-container">
                <img
                  src={import.meta.env.VITE_API_IMAGE_URL + movies[activeIndex].backdrop_path}
                  style={isLoaded ? {} : { display: "hidden" }}
                  className="carousel__card-image"
                  onLoad={() => setIsLoaded(true)}
                  id={movies[activeIndex].id}
                  onClick={(e) => handleCLick(e.target.id)}
                  loading="lazy"
                />
              </div>
            </div>
            <Chevron direction={"right"} handleCLick={handleNext} />
          </div>
          <Dots total={movies.length} active={activeIndex} />
        </>
      ) : null}
    </div>
  );
};
export default Carousel;
