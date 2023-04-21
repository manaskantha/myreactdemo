import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import SayHello from "./SayHello";
import Greeting from "./UserForm";
import MainApp from "./UseEffect";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const element = <Greeting />;
//element.props.firstName
console.log(element);

root.render(
  <StrictMode>
    <App />
    <br />
    <SayHello />
    <Greeting />
    <br />
    <MainApp />
  </StrictMode>
);
