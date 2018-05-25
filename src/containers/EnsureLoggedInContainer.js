import React from 'react';
import UsersAPI from '../services/UsersAPI';

export default class EnsureLoggedInContainer extends React.Component {
    componentDidMount() {
        if (!UsersAPI.isAuthenticated) {
            browserHistory.replace("/login");
        }
    }

    render() {
        if (UsersAPI.isAuthenticated) {
            return this.props.children;
        } else {
            return null;
        }
    }
}