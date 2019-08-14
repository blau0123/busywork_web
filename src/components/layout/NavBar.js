import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
//import {makeStyles} from '@material-ui/core/styles'

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
/*
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: 'white',
    },
}));
*/

const root_styles = {
    flexGrow: 1,
}

const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    size: '24px',
}

const NavBar = () => {
    //const classes = useStyles();

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

export default NavBar;