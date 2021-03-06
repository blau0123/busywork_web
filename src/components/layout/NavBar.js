import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { shadows } from '@material-ui/system';

const root_styles = {
    flexGrow: 1,
    height:'10vh',
}

const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    size: '24px',
}

/*
Component that handles the navigation bar at the top, holding the
'home' button and the links to sign in/sign out/sign up
Only shows if user is logged in and hidden if not logged in, for more
room for the home page. Determined in App.js
*/
const NavBar = ({auth}) => {
    // determine if user is logged in or not if auth prop holds uid property 
    const linksToShow = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

    // if user is logged in, then clicking title will bring user to dashboard
    const dashboardOrHome = auth.uid ? 
    <Link className="title" to="/dashboard" style={title_styles}>
        <h2>BusyWork</h2>
    </Link> :
    <Link className="title" to="/" style={title_styles}>
        <h2>BusyWork</h2>
    </Link>;

    return(
        <div className="root" style={root_styles}>
            <AppBar position='static' style={{background: "#B0D7E6", fontFamily:'Playfair Display, serif'}}>
                <Toolbar className="container">
                    {dashboardOrHome}
                    {linksToShow}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(NavBar);