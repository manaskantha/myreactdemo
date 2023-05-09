import "./styles.css";
import React, { useState } from "react";
import SayHello from "./SayHello";
import MainApp from "./UseEffect";
import BasicUserDetails from "./BasicUserDetails";
import UserDetails from "./userdetails/Displayusers";

const DUMMY_USERS = [
  {
    firstName: "Peter",
    lastName: "Jones",
    dob: new Date(1994, 7, 14),
    gender: "Male",
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    dob: new Date(1988, 5, 11),
    gender: "Male",
  },
];

export default function Greeting() {
  const [userDetails, setUserDetails] = React.useState(DUMMY_USERS);
  //This is to get value from child component i.e BasicUserDetails
  const onBasicFormSubmitHandler = (basicUserInput) => {
    setUserDetails((prevUserDetails) => {
      return [basicUserInput, ...prevUserDetails];
    });
    const enteredUserInput = {
      //To keep previous value
      ...basicUserInput,
      id: Math.random().toString(),
    };
    console.log(enteredUserInput);
  };
  return (
    <div>
      <BasicUserDetails onBasicFormSubmit={onBasicFormSubmitHandler} />
      <MainApp />
      <UserDetails items={userDetails} />
    </div>
  );
}

export function ExportNames({ firstName, lastName }) {
  React.useEffect(() => {
    <SayHello firstName={firstName} lastName={lastName} />;
  }, [firstName]);
}
