import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import SignUp from './components/sign-up/sign-up'
import SignIn from './components/sign-in/sign-in'
import UserInterFace from './components/user-interface/user-interface'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Redirect from={'/'} to={'/signin'} exact />
            <Route path={'/signup'} component={SignUp} />
            <Route path={'/signin'} component={SignIn} />
            <Route path={'/userinterface'} component={UserInterFace} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
