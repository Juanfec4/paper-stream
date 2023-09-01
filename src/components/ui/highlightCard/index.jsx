import "./styles.scss";
import starIcon from "../../../assets/icons/star-filled.svg";
import { useNavigate } from "react-router-dom";
const HighlightCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate(`../movie/${movie.id}`);
  };
  return (
    <div className="highlight-card">
      <img
        src={import.meta.env.VITE_API_IMAGE_URL + movie.poster_path}
        className="highlight-card__image"
        loading="lazy"
        onClick={handleCLick}
      />
      <div className="highlight-card__overlay">
        <span className="highlight-card__rating">
          <img src={starIcon} className="highlight-card__icon" />
          <p className="highlight-card__rating-text">{movie.vote_average.toFixed(1)}</p>
        </span>
      </div>
    </div>
  );
};

export default HighlightCard;
