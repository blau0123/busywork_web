import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const list_styles = {
    "list-style-type": "none",
    "display": "inline"
}

const list_item_styles = {
    "text-decoration": "none",
    "color": "white"
}

/*
The links shown to the user when he/she is signed in
These links are settings and log out
*/
const SignedInLinks = () => {
    return(
        // list of links user can go to when signed in (notes, todos, calendar, log out)
        <ul style={list_styles}>
            <li>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}}>
                    <NavLink to="/" style={list_item_styles}>Settings</NavLink>
                </Button>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}}>
                    <NavLink to="/" style={list_item_styles}>Log out</NavLink>
                </Button>
            </li>
        </ul>
    );
}

export default SignedInLinks;