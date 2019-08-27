import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {signUp} from '../../redux/store/actions/authActions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

//#6E88C1
const signup_btn_styles = {
    textTransform: 'none',
    margin: '10px',
    padding: '10px',
    background: '#B0D7E6',
    color: 'white',
    fontFamily:'Playfair Display, serif',
}

const signup_fail_styles = {
    color: 'red',
    fontSize: '18px',
    textAlign: 'center',
}

const bg_container_styles = {
    minHeight:'100vh', 
    minWidth:'100vw', 
    background:'#B0D7E6', 
    position:'fixed',
}

const signin_link_styles = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#B0D7E6',
    display: 'inline-block',
    marginLeft: '5px',
}

/*
Component that allows user to sign in with username and password
stored in firebase firestore database
*/
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }

    // handles when there's a change in the input text
    handleChange = (evt) => {
        this.setState({
            //change the value of id of email/pw to new value
            [evt.target.id]: evt.target.value
        })
    }

    // handles when submit btn clicked
    handleSubmit = (evt) => {
        evt.preventDefault();
        // state holds all of the info needed for a new user
        this.props.signUp(this.state);
    }

    render(){
        // check if user is already logged in/signed up; if so, then take to home page
        const {auth, authError} = this.props;
        if (auth.uid){
            return <Redirect to="/dashboard" />;
        }

        return(
            <div className="bg-container" style={bg_container_styles}>
                <div style={{margin: '3vh 30vw'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px', textAlign:'center'}} className="signin-container">
                                <h3 style={{fontFamily:'Playfair Display, serif'}}>Sign up</h3>
                                <form className="form-container">
                                    <FormControl fullWidth>
                                        <TextField id='firstName'
                                            label="First Name" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}
                                            InputLabelProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}/>
                                        <TextField id='lastName'
                                            label="Last Name" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}
                                            InputLabelProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}/>
                                        <TextField id='email'
                                            label="Email" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}
                                            InputLabelProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}/>
                                        <TextField id="password"
                                            label="Password" type="password" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}
                                            InputLabelProps={{
                                                style:{fontFamily:'Playfair Display, serif'}
                                            }}/>
                                        <Button variant='contained' className="submit-btn"
                                            onClick={this.handleSubmit}
                                            style={signup_btn_styles}>
                                            Sign up!
                                        </Button>
                                    </FormControl>
                                </form>
                                <div className="go-to-signin" style={{fontFamily:'Playfair Display, serif'}}>
                                    <p style={{display:'inline-block'}}>Already have an account?</p>
                                    <Link to="/signin" style={signin_link_styles}>Sign in here!</Link>
                                </div>
                                <div className="fail-message">
                                    {authError === null ? null: <p style={signup_fail_styles}>{authError}</p> }
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);