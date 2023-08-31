import { useState } from "react";

import searchIcon from "../../../assets/icons/search.svg";
import "./styles.scss";

const Search = ({ placeholder }) => {
  const [input, setInput] = useState(undefined);
  return (
    <span className="search">
      <img src={searchIcon} className="search__icon" />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="search__input"
      />
    </span>
  );
};
export default Search;
