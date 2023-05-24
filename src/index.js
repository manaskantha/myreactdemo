import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import SayHello from "./mycomponents/SayHello";
import Greeting from "./mycomponents/UserForm";
import MainApp from "./mycomponents/UseEffect";
import GetMovies from "./mycomponents/FetchMovies";
import store from "./reduxlib/Store";
import Counter from "./mycomponents/Counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const element = <Greeting />;
//element.props.firstName
console.log(element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <br />
      <SayHello />
      <Greeting />
      <br />
      <GetMovies />
      <Counter />
    </Provider>
  </StrictMode>
);
