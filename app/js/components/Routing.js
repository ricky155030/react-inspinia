'use strict';

import React from 'react';
import { Router, Route, IndexRoute, withRouter, Link, browserHistory} from 'react-router'

import App from '../containers/AppContainer'
import ExamplePage from './ExamplePage'

class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={withRouter(App)}>
          <Route path="/example" component={withRouter(ExamplePage)} />
        </Route>
      </Router>
    )
  }
}

export default Routing;
