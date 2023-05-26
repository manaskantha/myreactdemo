import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerActions } from "../reduxlib/Reducer";

const Counter = () => {
  //This subscribes to the value object in redux centralized store
  const counter = useSelector((state) => state.value);

  //This pushes updates to redux store
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(reducerActions.increase(1));
  };

  const decrementHandler = () => {
    dispatch(reducerActions.decrease(1));
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
