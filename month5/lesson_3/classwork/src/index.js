import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const myStore = createStore(rootReducer, applyMiddleware(thunk, logger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

