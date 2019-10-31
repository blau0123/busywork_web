import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../redux/store/actions/authActions';

import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const list_styles = {
    listStyleType: "none",
    display: "inline",
}

const list_item_styles = {
    textDecoration: "none",
    color: "white",
    fontFamily:'Playfair Display, serif',
}

/*
The links shown to the user when he/she is signed in
These links are settings and log out
*/
const SignedInLinks = (props) => {
    return(
        // list of links user can go to when signed in (notes, todos, calendar, log out)
        <ul style={list_styles}>
            <li>
                <Button className="nav-button" color="inherit" style={{textTransform:'none'}} onClick={props.signOut}>
                    <NavLink to="/" style={list_item_styles}>Log out</NavLink>
                </Button>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);