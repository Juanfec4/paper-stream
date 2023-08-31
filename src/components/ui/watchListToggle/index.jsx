import bookmarkIcon from "../../../assets/icons/bookmark.svg";

import "./styles.scss";
const WatchListToggle = ({ handleClick }) => {
  return (
    <button onClick={handleClick ? handleClick : null} className="icon-button--toggle">
      <img src={bookmarkIcon} className="icon-button__image" />
    </button>
  );
};
export default WatchListToggle;
