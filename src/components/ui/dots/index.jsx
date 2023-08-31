import "./styles.scss";
const Dots = ({ total, active }) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < total; i++) {
      dots.push(
        <span key={i} id={i} className={i === active ? "dot__element--active" : "dot__element"}>
          &#x2022;
        </span>
      );
    }
    return dots;
  };
  return <span className="dot__container">{renderDots()}</span>;
};

export default Dots;
