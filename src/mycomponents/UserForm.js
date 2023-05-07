import "./styles.css";
import React, { useState } from "react";
import SayHello from "./SayHello";
import MainApp from "./UseEffect";
import BasicUserDetails from "./BasicUserDetails";

export default function Greeting() {
  //This is to get value from child component i.e BasicUserDetails
  const onBasicFormSubmitHandler = (basicUserInput) => {
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
    </div>
  );
}

export function ExportNames({ firstName, lastName }) {
  React.useEffect(() => {
    <SayHello firstName={firstName} lastName={lastName} />;
  }, [firstName]);
}
