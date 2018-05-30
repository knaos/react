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
import AdminRoute from './components/AdminRoute';
import Logout from './containers/Logout';
import UsersList from './containers/UsersList';
import AddTask from './containers/AddTask';
import TasksList from './containers/TasksListContainer';
import EditTask from './containers/EditTask';
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
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/create/task">Add task</Link></li>
        {this.props.currentUser.isAdmin && (<li><Link to="/Users">Users</Link></li>)}
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
              <PrivateRoute path="/tasks/edit/:id" component={EditTask} />
              <PrivateRoute path="/tasks" component={TasksList} />
              <PrivateRoute path="/logout" component={Logout} />
              <PrivateRoute path="/create/task" component={AddTask} />
              <AdminRoute path="/users" component={UsersList} />
              <Route path="/"><h1>Wellcome to the tasks app!</h1></Route>
            </Switch>
          </section>
        </div>
      </Router >
    );
  }
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  globalMessage: state.message,
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(App);