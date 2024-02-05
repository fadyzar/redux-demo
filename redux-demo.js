import { createStore } from 'redux';

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Subscriber
const counterSubscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore); // Log the latest state
};

// Subscribe to changes
store.subscribe(counterSubscriber);

// Dispatch an action
store.dispatch({ type: 'INCREMENT' });
