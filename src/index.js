import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


//created a new variable that handles the state called initialState
const initialState = {
  count: 0
};



//created reducer with object
//and added a switch statement -->also added the increment and decrement actions to your Counter
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1
      };
    case 'IncrementByFive':
      return {
        count: state.count + 5
      };  
    case 'Decrement':
      return {
        count: state.count - 1
      };
    case 'DecrementByTen':
      return {
        count: state.count - 10
      };  
    case 'Reset':
      return {
        count: (state.count = 0)
      };
    default:
      return state; //if there is no change --> default result
  }
}

//created a store and passed reducer(reducer)
const store = createStore(reducer);

//added the App component
//added the Provider component and every component will be able to use connect to access the Redux store -> and passed {store}
//The Provider component essentially provides a way to add data to the entire component tree's context, so every child component has access to it

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);


//render method
render(<App />, document.getElementById('root'));