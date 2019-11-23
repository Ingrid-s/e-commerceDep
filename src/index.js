import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';
import './assets/styles/main.scss';

const initialState = {
  products: [],
  cart: [],
  totalCart: 0,
  wishes: [],
  totalWishes: 0,
  user:{},
};

const composeEnhacer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, composeEnhacer(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
