import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// import Tab from './components/Tab/Tab'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import UserInterFace from './components/UserInterFace/UserInterFace'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Redirect from={'/'} to={'/signup'} exact />
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
