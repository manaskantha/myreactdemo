import React, { useState } from "react";
import MoviesList from "./MoviesList";

export default function GetMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  async function FetchMoviesHandler() {
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films111");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMoviesHandler}>Get Star Wars Movies</button>
      </section>
      <section>
        <MoviesList MoviesList={movies} />
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}
