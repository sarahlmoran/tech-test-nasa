import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const imageSearch = (searchWord) => {
    setSearchResults(searchWord);
    setSearched(true);
  };

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa"
      />
      <Search setSearchResults={imageSearch} />
      <SearchResults results={searchResults} searched={searched} />
    </div>
  );
};

export default App;
