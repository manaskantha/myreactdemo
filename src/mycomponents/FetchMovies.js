import React from "react";
import MoviesList from "./MoviesList";

export default function GetMovies() {
  const [movies, setMovies] = React.useState([]);
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
        console.log(transformedData);
        setMovies(transformedData);
      });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList MoviesList={movies} />
      </section>
    </React.Fragment>
  );
}
