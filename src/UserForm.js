import "./styles.css";
import React, { useState } from "react";

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.elements.firstName.value;
  const message = username ? "Submitted successfully" : "Invalid Input";
  alert(message);
}

export default function Greeting() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Your First Name: </label>
        <input
          onChange={() => setFirstName(window.event.target.value)}
          id="firstName"
        />
        <br />
        {firstName ? <strong></strong> : "Please type your first name"}
        <br />
        <br />
        <label htmlFor="lastName">Your Last Name: </label>
        <input
          onChange={() => setLastName(window.event.target.value)}
          id="lastName"
        />
        <br />
        {lastName ? <strong></strong> : "Please type your last name"}
        <br />
        <br />
        <label htmlFor="dob">Date of birth: </label>
        <input
          type="date"
          id="dob"
          onChange={() => setDob(window.event.target.value)}
        ></input>

        <br />
        {firstName && lastName ? (
          <strong>
            Hello {firstName} {lastName}
          </strong>
        ) : (
          ""
        )}
        <br />
        {dob ? <strong>Your date of birth is: {dob}</strong> : ""}
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
