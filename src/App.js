import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import { connect } from 'react-redux';
import { logout } from './actions';

import Login from './containers/Login.js';
import UsersAPI from './services/UsersAPI.js';
import Authentication from './services/Authentication.js';
import Register from './containers/Register.js';
import PrivateRoute from './components/PrivateRoute';
import Logout from './containers/Logout';

class App extends React.Component {

  constructor(props) {
    super(props);
    UsersAPI.seedAdmin();

    this.auth = new Authentication();
  }

  renderGuestHeader() {
    return (
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    );
  }

  renderUserHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">About</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>);
  }

  render() {

    return (
      <Router>
        <div>
          <header>
            <nav>
              {(this.props.isAuthenticated) ? this.renderUserHeader() : this.renderGuestHeader()}
            </nav>
          </header>
          <section className="container">
            {this.props.globalMessage.length > 0 && (<div className="alert alert-info">
              {this.props.globalMessage}
            </div>)}
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/tasks" component={Register} />
              <PrivateRoute path="/logout" component={Logout} />
            </Switch>
          </section>
        </div>
      </Router >
    );
  }
}

// function requireAuth(nextState, replace) {
//   if (!this.isAuthenticated) {
//     replace({
//       pathname: '/login'
//     })
//   }
// }

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  globalMessage: state.message
});

export default connect(mapStateToProps)(App);