import { useEffect, useState } from "react";

import "./styles.scss";

const ProgressBar = ({ percentage, total }) => {
  const [progress, setProgress] = useState(0.0);

  useEffect(() => {
    if ((1 / total) * percentage.toFixed(2) > 1) {
      setProgress(100);
    } else if (!isNaN(((1 / total) * percentage * 100).toFixed(2))) {
      setProgress(((1 / total) * percentage * 100).toFixed(2));
    }
  }, [percentage]);

  return (
    <div className="progress-bar">
      <div className="progress-bar__track">
        <div className="progress-bar__slider" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
export default ProgressBar;
