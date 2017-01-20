import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import CreateUser from './components/CreateUser';

import reducers from './reducers';

import {Router,Route} from 'react-router';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/cuser" component={CreateUser} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
