import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

/*
Component that shows the details of a note in TextFields so that
the user can easily update information in the note
*/
class NoteDetail extends React.Component{
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
        console.log(this.state);
    }

    render(){
        const thisNote = this.props.note;
        console.log(thisNote);
        // make sure thisNote is synced from firestore before showing
        if (thisNote){
            return(
                <div className="bg-container">
                    <div style={{margin: '100px'}} className="container">
                        <Card style={{background: '#F9F9F9'}}>
                            <CardContent>
                                <div style={{padding: '40px'}} className="signin-container">
                                    {/* text form for view and edit note */}
                                    <form onSubmit={{}} className="form-container">
                                        <FormControl fullWidth>
                                            <TextField id='title'
                                                label="Title" margin="normal" 
                                                value={thisNote.title}
                                                style={{margin:'10px'}}
                                                onChange={this.handleChange}/>
                                            <TextField id="body"
                                                label="What's on your mind?"
                                                margin="normal" 
                                                multiline='true'
                                                rows='20'
                                                value={thisNote.body}
                                                style={{margin:'10px'}}
                                                onChange={this.handleChange}/>
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
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'notes',
    }])
)(NoteDetail);