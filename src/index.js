import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, dispatch, applyMiddleware, seeduxInit, dispatchLogger, bindActionCreators } from './../../seedux';
import todoApp from './reducers/index';
import App from './components/App';
import * as todoActionCreators from './actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('./styles.css');
// import { bindActionCreators } from 'seedux';

// Redux devtools enabled

// let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Redux devtools disabled

const reduxifyTest = bindActionCreators(todoActionCreators, dispatch);

let store = createStore(todoApp, applyMiddleware(dispatchLogger));
seeduxInit(store);

render(
  <Provider store = { store }>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
