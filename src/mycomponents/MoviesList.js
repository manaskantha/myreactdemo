import React from "react";

export default function MoviesList(props) {
  console.log("inside movie list");
  console.log(props);
  return (
    <ul>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </ul>
  );
}
