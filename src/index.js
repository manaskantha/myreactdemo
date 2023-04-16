import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import SayHello from "./SayHello";
import Greeting from "./Greeting";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <SayHello firstName={"Stranger"} />
    <Greeting />
  </StrictMode>
);
