import React, { useState } from "react";
import MoviesList from "./MoviesList";

export default function GetMovies() {
  const [movies, setMovies] = useState([]);
  function FetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedData);
      });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMoviesHandler}>Get Star Wars Movies</button>
      </section>
      <section>
        <MoviesList MoviesList={movies} />
      </section>
    </React.Fragment>
  );
}
