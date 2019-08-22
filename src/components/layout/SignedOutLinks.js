import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const list_styles = {
    listStyleType: "none",
    display: "inline",
}

const list_item_styles = {
    textDecoration: "none",
    color: "white",
    fontFamily:'Playfair Display, serif'
}

/*
Links shown to the user when he/she is signed out
These links are sign up or log in (both of which takes you to a form 
component to do either)
*/
const SignedOutLinks = () => {
    return(
        // list of links user can go to when signed in (notes, todos, calendar, log out)
        <ul style={list_styles}>
            <li>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}}>
                    <NavLink to="/signup" style={list_item_styles}>Sign up</NavLink>
                </Button>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}}>
                    <NavLink to="/signin" style={list_item_styles}>Log in</NavLink>
                </Button>
            </li>
        </ul>
    );
}

export default SignedOutLinks;