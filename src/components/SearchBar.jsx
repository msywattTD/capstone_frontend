import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    console.log(input);
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
