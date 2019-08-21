import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

/*
A route guard that renders the passed in component only if the user is authenticated,
and if not, then the signin page is rendered for the user to sign in
*/
const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return(
        <Route {...rest} render={props => 
            auth.uid ? <Component {...props} /> : <Redirect to="signin" />
        } />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(PrivateRoute);