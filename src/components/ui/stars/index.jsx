import starIcon from "../../../assets/icons/star.svg";
import starIconFilled from "../../../assets/icons/star-filled.svg";
import halfStarIcon from "../../../assets/icons/star-half-filled.svg";

import "./styles.scss";

const Stars = ({ rating }) => {
  const revisedRating = (rating / 2).toFixed(1);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} id={i}>
          {i + 0.5 <= revisedRating ? (
            <img
              src={i + 1 <= revisedRating ? starIconFilled : halfStarIcon}
              className={"star--active"}
            />
          ) : (
            <img src={starIcon} className={"star"} />
          )}
        </span>
      );
    }
    return stars;
  };
  return <span>{renderStars()}</span>;
};
export default Stars;
