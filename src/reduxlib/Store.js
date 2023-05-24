import { createStore } from "redux";
import reducers from "./Reducer";

const store = createStore(reducers);

const counterSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(counterSubscriber);

export default store;
