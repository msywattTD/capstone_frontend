import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";

function NavBar() {
  return (
    <div className="nav">
      <IconContext.Provider value={{ size: "2.5em" }}>
        <FaHome id="FaHome" />
      </IconContext.Provider>
      <SearchBar />
      <div className="navbar-link" id="advanced-search-link">
        Advanced Search
      </div>
      <div className="navbar-link" id="account-link">
        Account
      </div>
      <div className="navbar-link">Favorites</div>
      <div className="navbar-link">Logout</div>
    </div>
  );
}

export default NavBar;
