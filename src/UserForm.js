import "./styles.css";
import React, { useState } from "react";

export default function Greeting() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  return (
    <div>
      <form>
        <label htmlFor="firstName">Your First Name: </label>
        <input
          onChange={() => setFirstName(window.event.target.value)}
          id="firstName"
        />
        <br />
        {firstName ? (
          <strong></strong>
        ) : (
          "Please type your first name"
        )}
        <br />
        <label htmlFor="lastName">Your Last Name: </label>
        <input
          onChange={() => setLastName(window.event.target.value)}
          id="lastName"
        />
      </form>

      {firstName && lastName ? (
        <strong>Hello {firstName} {lastName}</strong>
      ) : (
        "Please type your last name"
      )}
    </div>
  );
}
