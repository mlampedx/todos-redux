import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index';
import App from './components/App';

// Redux devtools enabled

// let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Redux devtools disabled

let store = createStore(todoApp);

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
