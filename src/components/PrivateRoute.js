import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

let PrivateRoute = ({ component, redirectTo = '/login', ...rest, isAuthenticated }) => {
    return (
        <Route {...rest} render={routeProps => {
            return isAuthenticated ? (
                renderMergedProps(component, routeProps, rest)
            ) : (
                    <Redirect to={{
                        pathname: redirectTo,
                        state: { from: routeProps.location }
                    }} />
                );
        }} />
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.users.isAuthenticated
});

PrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default PrivateRoute;