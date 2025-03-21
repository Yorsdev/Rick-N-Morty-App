import { useState, useRef, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../search.css";
import axios from "axios";

function Search({ setSearchQuery }) {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(""); 
  const debouncedInput = useDebounce(inputValue, 300); 
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]); 


  useEffect(() => {
    if (debouncedInput) {
      const fetchSuggestions = async () => {
        try {
          const res = await axios.get(
            `https://rickandmortyapi.com/api/location/?name=${debouncedInput}`
          );
          setSuggestions(res.data.results || []); 
        } catch (error) {
          setSuggestions([]); 
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); 
    }
  }, [debouncedInput]);

  const handleChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleClick = (query) => {
    if (!query) {
      setError("¡Burp! Type a valid argument, Morty");
      return;
    }
    setSearchQuery(query); 
    setInputValue(""); 
    setSuggestions([]);
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick(debouncedInput);
    }
  };

  return (
    <div>
      <div className="search__container">
        <input
          placeholder="Search by number or Name"
          className="search__input"
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <span className="tooltip">A number from 1 to 126 or any Letter</span>
        <button
          className="search__button"
          onClick={() => handleClick(debouncedInput)}
        >
          Search
        </button>
      </div>
      {error && <p className="search__error">{error}</p>}

      {/* Renderizar las sugerencias */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((location) => (
            <li
              key={location.id}
              onClick={() => handleClick(location.name)}
              className="suggestion-item"
            >
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Search;