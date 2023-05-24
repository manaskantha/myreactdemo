import { createStore } from 'redux';
import reducers from './reducer';

const store = createStore(reducers);

const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({type: "INCREMENT"})


export default store;