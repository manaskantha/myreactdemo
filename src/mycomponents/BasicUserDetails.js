import "./styles.css";
import React, { useState } from "react";
import SayHello from "./SayHello";

export default function BasicUserDetails(props) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const userData = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
    };
    props.onBasicFormSubmit(userData);
    const message =
      firstName && lastName ? "Submitted successfully" : "Invalid Input";
    alert(message);
  };
  const value = (
    <div className="userForm">
      <form>
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
        <br />
        <button type="submit" onClick={handleSubmit} className="btn success">
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
