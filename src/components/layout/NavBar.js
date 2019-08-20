import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const root_styles = {
    flexGrow: 1,
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
*/
const NavBar = () => {
    return(
        <div className="root" style={root_styles}>
            <AppBar position='static' style={{background: "#6E88C1"}}>
                <Toolbar className="container">
                    <Link className="title" to="/" style={title_styles}>
                        <h2>BusyWork</h2>
                    </Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
}

export default connect(mapStateToProps)(NavBar);