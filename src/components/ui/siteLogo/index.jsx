import { useNavigate } from "react-router-dom";
import sailBoat from "../../../assets/logos/sailboat.svg";

import "./styles.scss";
const SiteLogo = ({ hasText = true }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <span className="site-logo" onClick={handleClick}>
      <span className="site-logo__background">
        <img src={sailBoat} className="site-logo__icon" />
      </span>
      {hasText ? <h2 className="site-logo__title">PaperStream</h2> : null}
    </span>
  );
};

export default SiteLogo;
