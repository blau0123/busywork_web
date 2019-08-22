import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {signUp} from '../../redux/store/actions/authActions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const signup_btn_styles = {
    textTransform: 'none',
    margin: '10px',
    padding: '10px',
    background: '#6E88C1',
    color: 'white',
}

const signup_fail_styles = {
    color: 'red',
    fontSize: '18px',
    textAlign: 'center',
}

/*
Component that allows user to sign in with username and password
stored in firebase firestore database
*/
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            firstname:'',
            lastname:'',
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
            return <Redirect to="/" />;
        }

        return(
            <div className="bg-container">
                <div style={{margin: '20vh 30vw'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px', textAlign:'center'}} className="signin-container">
                                <h3>Sign up</h3>
                                <form className="form-container">
                                    <FormControl fullWidth>
                                        <TextField id='firstname'
                                            label="First Name" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <TextField id='lastname'
                                            label="Last Name" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <TextField id='email'
                                            label="Email" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <TextField id="password"
                                            label="Password" type="password" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <Button variant='contained' className="submit-btn"
                                            onClick={this.handleSubmit}
                                            style={signup_btn_styles}>
                                            Sign up!
                                        </Button>
                                    </FormControl>
                                </form>
                                {authError ? <p style={signup_fail_styles}>{authError}</p> : null}
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