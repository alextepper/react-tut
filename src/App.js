import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./SearchIcon.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dc0f594a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>All Movies</h1>
      <div className="search">
        <input
          placeholder="Type movie title..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>Sorry movies not found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
