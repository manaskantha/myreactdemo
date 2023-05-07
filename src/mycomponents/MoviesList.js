import React from "react";
import "./moviecard.css";

export default function MoviesList(props) {
  const Movies = props.MoviesList.map((items) => (
    <li className="movie-card">
      <h2>{items.title}</h2>
      <h3>{items.releaseDate}</h3>
      <p>{items.openingText}</p>
    </li>
  ));
  return <ul>{Movies}</ul>;
}
