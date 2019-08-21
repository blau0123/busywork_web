import React from 'react';
import {connect} from 'react-redux';

import {addNote} from '../../redux/store/actions/noteActions';

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
class AddNote extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'',
            body:''
        }
    }

    /* handles when there's a change in the input text (make sure
    id's of input components match name of corresponding state var)
    */
    handleChange = (evt) => {
        this.setState({
            //change the value of id of email/pw to new value
            [evt.target.id]: evt.target.value
        })
    }

    // handles when submit btn clicked
    handleSubmit = (evt) => {
        evt.preventDefault();
        // state holds info for the note wanted to add, so pass it in to action creator
        this.props.addNote(this.state);
    }

    render(){
        return(
            <div className="bg-container">
                <div style={{margin: '5vh 20vw'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px'}} className="signin-container">
                                <h3>New Note</h3>
                                {/* text form for inputting new note */}
                                <form className="form-container">
                                    <FormControl fullWidth>
                                        <TextField id='title'
                                            label="Title" margin="normal" 
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <TextField id="body"
                                            label="What's on your mind?"
                                            margin="normal" 
                                            multiline='true'
                                            rows='20'
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <Button variant='contained' className="submit-btn"
                                            onClick={this.handleSubmit}
                                            style={signin_btn_styles}>
                                            Add Note
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

// allows this component to access action creators, like addNote()
const mapDispatchToProps = (dispatch) => {
    return {
        // addNote is a method that dispatches action creator that makes async call
        addNote: (note) => dispatch(addNote(note))
    }
}

export default connect(null, mapDispatchToProps)(AddNote);