import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './index.css';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import humanReducer from './reducers/human';
import {sortHumans} from './reducers/index';

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant')()] :
  [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(humanReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// ---

const doSortingOfHumans = () => {
  const state = store.getState();
  const sorted = sortHumans(state.entities);
  if (sorted.length !== state.sorted.length || !sorted.every((key, index) => key === state.sorted[index])) {
    store.dispatch({
      type: 'STORE_SORTED_LISTING',
      listing: sorted
    });
  }
};

store.subscribe(() => {
  // This is just example, in real world app we would like to solve this in some middleware like redux-saga
  doSortingOfHumans();
});

doSortingOfHumans();