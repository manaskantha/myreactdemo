import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Redux counter</h1>
      <div>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
