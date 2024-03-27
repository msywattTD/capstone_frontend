import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchTitles = async (value) => {
    await fetch("http://localhost:3000/images")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((post) => {
          return (
            value &&
            post &&
            post.postTitle &&
            post.postTitle.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchTitles(value);
  };
  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <input
          placeholder="type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <FaSearch id="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
