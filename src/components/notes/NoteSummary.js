import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {deleteNote} from '../../redux/store/actions/noteActions';

const list_item_styles = {
    textDecoration: 'none',
    color: 'black',
    fontFamily:'Playfair Display, serif',
}

const delete_styles = {
    color: 'black',
    fontFamily:'Playfair Display, serif',
    float:'right'
}

/*
Summary of notes that are displayed on the dashboard for easy access,
rather than showing all notes or having to traverse to the notes page
*/
class NoteSummary extends React.Component{
    constructor(){
        super();
        this.state = {
            showPopup: false,
        }
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(evt){
        evt.preventDefault();
       // call deletenote action creator to delete note from firestore
       const noteToDelete = this.props.note;
       this.props.deleteNote(noteToDelete);
    }

    render(){
        const {note} = this.props;
        const lastUpdated = new Date(note.lastUpdated.seconds * 1000);

        return(
            <div className="container" style={{width: '100%'}}>
                <Link to={'/notes/' + note.id} style={list_item_styles}>
                    <Card style={{height: '250px'}}>
                        <CardContent style={{maxHeight:'70%', overflow:'hidden'}}>
                            <Button style={delete_styles} onClick={this.deleteNote}>
                                <Link to='/dashboard' style={list_item_styles}>X</Link>
                            </Button>
                            {/* holds text in each list item of notes list */}
                            <div className="note-content">
                                <h3>{note.title}</h3>
                                <p>{note.body}</p>
                            </div>
                        </CardContent>
                        <CardContent>
                            {lastUpdated.toLocaleString()}
                        </CardContent>
                    </Card>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (note) => dispatch(deleteNote(note)),
    }
}

export default connect(null, mapDispatchToProps)(NoteSummary);