import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bankingApp from './reducers';
import App from './App';
import * as schema from './api/schema';
import * as api from './api';
import './index.css';

const store = createStore(
  bankingApp,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ api, schema }))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
