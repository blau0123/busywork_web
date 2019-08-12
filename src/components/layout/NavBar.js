import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

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

const NavBar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar background="#6E88C1">
                <Toolbar className="container">
                    <Link className={classes.title} to="/" className="logo">BusyWork</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;