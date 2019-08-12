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

const SignedOutLinks = () => {
    return(
        // list of links user can go to when signed in (notes, todos, calendar, log out)
        <ul style={list_styles}>
            <li>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}}>
                    <NavLink to="/" style={list_item_styles}>Sign up</NavLink>
                </Button>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}}>
                    <NavLink to="/" style={list_item_styles}>Log in</NavLink>
                </Button>
            </li>
        </ul>
    );
}

export default SignedOutLinks;