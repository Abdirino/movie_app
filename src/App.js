import "./App.css";
import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=4834b7f6";

const movie1 = {
  Title: "Black Widow",
  Year: "2019",
  imdbID: "tt9272572",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BODZiMjQ1YzQtODU1Yy00YWFkLTgwY2YtOGJjNWMwOWJkMTZiXkEyXkFqcGdeQXVyNjcyMzUzNTM@._V1_SX300.jpg",
};
// Application
function App() {

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Black Widow");
  }, []);

  return (
    <div className="app">
      <h1>Movie Haven</h1>

      <div className="search">
        <input
          placeholder="Search For Movies"
          value="SpiderMan"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="Search Icon" onClick={() => {}} />
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
        <MovieCard movie1={movies[0]} />
          </div>
          ) : 
          (
            <div className="empty"></div>
          )
      }

      <div className="container">
        <MovieCard movie1={movies[0]} />
      </div>
    </div>
  );
}

export default App;
