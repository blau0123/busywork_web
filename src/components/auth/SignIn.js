import React from 'react';
import {connect} from 'react-redux';

import {signIn} from '../../redux/store/actions/authActions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const signin_btn_styles = {
    textTransform: 'none',
    margin: '10px',
    padding: '10px',
    background: '#6E88C1',
    color: 'white',
}

const login_fail_styles = {
    color: 'red',
    fontSize: '18px',
    textAlign: 'center',
}

/*
Component that allows user to sign in with username and password
stored in firebase firestore database
*/
class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    // handles when there's a change in the input text
    handleChange = (evt) => {
        this.setState({
            //target.id gives either email or pw
            [evt.target.id]: evt.target.value
        })
    }

    // handles when submit btn clicked
    handleSubmit = (evt) => {
        evt.preventDefault();
        // when submit signin, call signin action creator with this.state (holds credentials)
        this.props.signIn(this.state);
    }

    render(){
        const {authError} = this.props;
        return(
            <div className="bg-container">
                <div style={{margin: '150px'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px'}} className="signin-container">
                                <h3>Sign In</h3>
                                <form className="form-container">
                                    <FormControl fullWidth>
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
                                            style={signin_btn_styles}>
                                            Login
                                        </Button>
                                    </FormControl>
                                </form>
                            </div>
                            {authError ? <p style={login_fail_styles}>Log in failed!</p> : null}
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

// get signIn function as a prop that uses signIn action creator
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
    }
}

// get auth error to display if error logging in or not
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);