import { Link } from "react-router-dom";

import "./styles.scss";

const IconButton = ({ icon, link, text }) => {
  return (
    <Link target="_blank" to={link} className="link-button">
      <img src={icon} className="link-button__icon" />
      <span className="link-button__text">{text}</span>
    </Link>
  );
};
export default IconButton;
