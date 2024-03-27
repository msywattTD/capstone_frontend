import { Link } from "react-router-dom";
import React from "react";

function SearchResultItem({ result }) {
  return (
    <>
      <Link
        to={`/${result._id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="search-result">{result.postTitle}</div>
      </Link>
    </>
  );
}

export default SearchResultItem;
