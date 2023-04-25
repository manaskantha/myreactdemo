import "./styles.css";
import React, { useState } from "react";
import SayHello from "./SayHello";

function handleSubmit(event) {
  event.preventDefault();
  const firstName = event.target.elements.firstName.value;
  const lastName = event.target.elements.lastName.value;
  const message =
    firstName && lastName ? "Submitted successfully" : "Invalid Input";
  alert(message);
}

export default function Greeting() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const value = (
    <div className="userForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Your First Name: </label>
        <input
          type="text"
          onChange={() => setFirstName(window.event.target.value)}
          id="firstName"
          styles="input"
        />
        <br />
        {firstName ? <strong></strong> : "Please type your first name"}
        <br />
        <br />
        <label htmlFor="lastName">Your Last Name: </label>
        <input
          type="text"
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
        <button type="submit" className="btn success">
          Submit Form
        </button>
      </form>
    </div>
  );

  React.useEffect(() => {
    SayHello({ firstName, lastName });
  }, [firstName]);

  return value;
}

export function ExportNames({ firstName, lastName }) {
  React.useEffect(() => {
    <SayHello firstName={firstName} lastName={lastName} />;
  }, [firstName]);
}
