import chevronLeft from "../../../assets/icons/chevron-left.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";

import "./styles.scss";
const Chevron = ({ handleCLick, direction }) => {
  return (
    <span onClick={handleCLick} className="chevron__container">
      <img
        src={direction === "left" ? chevronLeft : direction === "right" ? chevronRight : null}
        className="chevron__icon"
      />
    </span>
  );
};
export default Chevron;
