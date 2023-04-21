import "./styles.css";
import React from "react";
import { PropTypes } from "prop-types";

export default function SayHello({ firstName, lastName }) {
  const message = firstName ? firstName : "Stranger";
  return (
    <div>
      <h3>Hello:</h3>
      <p>{message}</p>
    </div>
  );
}

SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
