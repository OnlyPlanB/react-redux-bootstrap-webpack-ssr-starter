// @flow weak

/* eslint-disable no-process-env */
import React, {
  Component
}                               from 'react';
import {
  BrowserRouter as Router
}                               from 'react-router-dom';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import { createBrowserHistory } from 'history';
import App                      from './containers/app/App';

const preloadedState  = window.__PRELOADED_STATE__;
const store           = configureStore(preloadedState);
delete window.__PRELOADED_STATE__;

const history         = createBrowserHistory();
const syncedHistory   = syncHistoryWithStore(history, store);


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            <App />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
