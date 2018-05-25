import React from 'react';
import { connect } from 'react-redux';
import { addUser, showMessage } from '../actions/index';
import UsersAPI from '../services/UsersAPI';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.onChange = this.onChange.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSumbit(event) {
        event.preventDefault();
        let that = this;
        debugger;
        if (this.state.username.length && this.state.password.length) {
            const user = { username: this.state.username, password: this.state.password };
            UsersAPI.addUser(user)
                .then((user) => {
                    that.props.dispatch(showMessage('You have successfully created your account. Now try to log in.'));
                    this.props.history.push('/login');
                })
                .catch(e => {
                    that.props.dispatch(showMessage(e))
                });
        }
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.onSumbit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={this.onChange} type="text" required id="username" name="username" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.onChange} type="password" required id="password" name="password" className="form-control" />
                    </div>

                    <input type="submit" className="btn btn-primary" value="Register now" />
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     onSumbit: {
//         dispatch()
//     }
// });

const RegisterContainer = connect()(Register);
export default RegisterContainer;

