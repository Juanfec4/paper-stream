import Search from "../../ui/search";
import SiteLogo from "../../ui/siteLogo";
import WatchListToggle from "../../ui/watchListToggle";

import "./styles.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <SiteLogo />
      <div className="nav__content">
        <Search placeholder={"Find a movie"} />
        <WatchListToggle />
      </div>
    </div>
  );
};
export default Navbar;
