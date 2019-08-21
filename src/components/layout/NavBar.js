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
const NavBar = ({auth}) => {
    // determine if user is logged in or not if auth prop holds uid property 
    const linksToShow = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

    return(
        <div className="root" style={root_styles}>
            <AppBar position='static' style={{background: "#6E88C1"}}>
                <Toolbar className="container">
                    <Link className="title" to="/" style={title_styles}>
                        <h2>BusyWork</h2>
                    </Link>
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