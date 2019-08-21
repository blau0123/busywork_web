import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {updateNote} from '../../redux/store/actions/noteActions';

const submit_btn_styles = {
    textTransform: 'none',
    margin: '10px',
    padding: '10px',
    background: '#6E88C1',
    color: 'white',
}

/*
Component that shows the details of a note in TextFields so that
the user can easily update information in the note
*/
class NoteDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
            id: '',
        }
    }

    /* handles when there's a change in the input text (make sure
    id's of input components match name of corresponding state var)
    */
    handleChange = (evt) => {
        // if state is not set, set it before changing it with user input
        if (this.state.title === '' && this.state.body === ''){
            console.log('setting state')
            this.setState({
                title: this.props.note.title,
                body: this.props.note.body,
                id: this.props.noteId,
            })
        }

        this.setState({
            //change the value of id of email/pw to new value
            [evt.target.id]: evt.target.value
        })
    }

    // handles when submit btn clicked
    handleSubmit = (evt) => {
        evt.preventDefault();
        // if state is not set, set it before changing it with user input
        if (this.state.title === '' && this.state.body === ''){
            this.setState({
                title: this.props.note.title,
                body: this.props.note.body,
                id: this.props.noteId,
            })
        }
        
        // update note's document in firebase
        this.props.updateNote(this.state);
        
    }

    render(){
        const thisNote = this.props.note;

        // make sure thisNote is synced from firestore before showing
        if (thisNote){
            return(
                <div className="bg-container">
                    <div style={{margin: '5vh 20vw'}} className="container">
                        <Card style={{background: '#F9F9F9'}}>
                            <CardContent>
                                <div style={{padding: '40px'}} className="signin-container">
                                    {/* text form for view and edit note */}
                                    <form className="form-container">
                                        <FormControl fullWidth>
                                            <TextField id='title'
                                                label="Title" margin="normal" 
                                                defaultValue={thisNote.title}
                                                style={{margin:'10px'}}
                                                onChange={this.handleChange}/>
                                            <TextField id="body"
                                                label="What's on your mind?"
                                                margin="normal" 
                                                multiline={true}
                                                rows='20'
                                                defaultValue={thisNote.body}
                                                style={{margin:'10px'}}
                                                onChange={this.handleChange}/>
                                            <Button variant='contained' className="submit-btn"
                                                onClick={this.handleSubmit}
                                                style={submit_btn_styles}>
                                                Save Changes
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
        else{
            return(
                <div className="container">
                    <h4>Note is loading...</h4>
                </div>
            )
        }
    }  
}

// gets id of note that was clicked and gets the singular item from firebase with id
const mapStateToProps = (state, componProps) => {
    const id = componProps.match.params.id;
    const noteList = state.firestore.data.notes;

    // if noteList is non empty, then get the note with the given id
    const note = noteList ? noteList[id] : null;
    return {
        note: note,
        noteId: id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNote: (note) => dispatch(updateNote(note)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'notes',
    }])
)(NoteDetail);