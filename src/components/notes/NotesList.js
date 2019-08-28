import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import NoteSummary from './NoteSummary'
import GridNoteTitle from '../dashboard/GridNoteTitle';

/*
List of note summaries, accessed by clicking on the notes title on
the Dashboard 
*/
class NotesList extends React.Component{
    render(){
        const userNoteList = this.props.noteList ? this.props.noteList.filter(note => note.authorId === this.props.auth.uid) : null;
        return(
            <div className="bg-container">
                <div style={{margin: '5vh 20vw'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <GridNoteTitle />
                            <List className="list-container" aria-label="previews">
                                {
                                    userNoteList && userNoteList.map(note => {
                                    return(
                                        <ListItem button key={note.id}>
                                            {/* passing in each individual note to render that specific note as a
                                            NoteSummary component */}
                                            <NoteSummary note={note} key={note.id} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

// allow dashboard to access certain props from store
const mapStateToProps = (storeState) => {
    return({
        noteList: storeState.firestore.ordered.notes,
        auth: storeState.firebase.auth,
    });
}

export default compose(firestoreConnect([{collection:'notes', orderBy:['lastUpdated','desc']}]),
    connect(mapStateToProps))(NotesList);