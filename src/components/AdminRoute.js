import React from 'react';

import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

let AdminRoute = ({ component, redirectTo = '/', ...rest, isAdmin }) => {
    return (
        <Route {...rest} render={routeProps => {
            return isAdmin ? (renderMergedProps(component, routeProps, rest)) : (
                <Redirect to={{ pathname: redirectTo, state: { from: routeProps.location } }} />)
        }}>

        </Route>
    )
}

const mapStateToProps = state => ({
    isAdmin: state.users.currentUser.isAdmin
})

AdminRoute = connect(mapStateToProps)(AdminRoute);

export default AdminRoute;