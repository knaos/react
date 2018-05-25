import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { Redirect } from 'react-router';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        props.onLogout();
    }

    render() {
        return (<Redirect to="/login" />);
    }
}

const mapDispatchToProps = dispatch => ({
    onLogout: () => {
        dispatch(logout());
    }
});

export default Logout = connect(null, mapDispatchToProps)(Logout);


