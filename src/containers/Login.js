import React from 'react';
import Authentication from '../services/Authentication';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", hasError: false, errorText: '' };

    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ hasError: false, errorText: '' });

    let that = this;
    Authentication.login(this.state.username, this.state.password)
      .then((user) => {
        that.props.dispatch(login(user));
      })
      .catch(e => {
        this.setState({
          hasError: true,
          errorText: e
        })
      });
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          {this.state.hasError && (<div className="alert alert-danger">{this.state.errorText}</div>)}
  
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Please type your username..."
              onChange={this.onUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Please type your password"
              onChange={this.onPasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);