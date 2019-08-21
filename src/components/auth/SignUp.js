import React from 'react';

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

/*
Component that allows user to sign in with username and password
stored in firebase firestore database
*/
class SignUp extends React.Component{
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
            //change the value of id of email/pw to new value
            [evt.target.id]: evt.target.value
        })
    }

    // handles when submit btn clicked
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="bg-container">
                <div style={{margin: '20vh 30vw'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px', textAlign:'center'}} className="signin-container">
                                <h3>Sign up</h3>
                                <form onSubmit={{}} className="form-container">
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
                                            Sign up!
                                        </Button>
                                    </FormControl>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SignUp;