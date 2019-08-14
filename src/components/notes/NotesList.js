import React from 'react';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import NoteSummary from './NoteSummary'

class NotesList extends React.Component{
    render(){
        const noteList = this.props.noteList;
        return(
            <div className="bg-container">
                <div style={{margin: '100px'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <h3 style={{paddingLeft:'25px'}}>Your Notes</h3>
                            <List className="list-container" aria-label="previews">
                                {
                                    noteList && noteList.map(note => {
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
        noteList: storeState.notes.noteList,
    });
}

export default connect(mapStateToProps)(NotesList);