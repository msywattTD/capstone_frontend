import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import SearchResultsList from "./SearchResultsList";

function NavBar() {
  const [results, setResults] = useState([]);

  return (
    <div className="nav">
      <IconContext.Provider value={{ size: "2.5em" }}>
        <Link to="http://localhost:5173">
          <FaHome id="FaHome" />
        </Link>
      </IconContext.Provider>
      <div className="seach-bar-container" style={{ zIndex: "5" }}>
        <SearchBar setResults={setResults} id="search-bar" />
        <SearchResultsList results={results} id="search-results-list" />
      </div>
      <div className="navbar-link" id="advanced-search-link">
        Advanced Search
      </div>
      <Link
        to="http://localhost:5173/upload"
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="navbar-link" id="upload-link">
          Upload
        </div>
      </Link>
      <div className="navbar-link" id="account-link">
        Account
      </div>
      <div className="navbar-link">Favorites</div>
      <div className="navbar-link">Logout</div>
    </div>
  );
}

export default NavBar;
