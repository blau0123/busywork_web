import React from 'react';

import NoteSummary from '../notes/NoteSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

/* pulls in data from firebase and passes data of each notes item
as props into each notesummary so the notesummary component can render
each individual note given the props

Inside of dashboard, shows list of summaries of important notes
*/
const NotesPrev = ({noteList}) => {
    console.log(noteList.length);
    return(
        <div>
            {
                /* ternary to determine whether to show the list
                or tell the user there are no notes
                */
                noteList.length > 0 ? 
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
                </List> : 
                <h3 style={{padding: '25px', textAlign:'center'}}>
                    No notes currently! Get started by clicking on the add button above!
                </h3>
            }
        </div>
    )
}
/*
class NotesPrev extends React.Component{
    render(){
        return(
            <List aria-label="previews">
                <ListItem button>
                    <NoteSummary />
                </ListItem>
                <ListItem button>
                    <NoteSummary />
                </ListItem>
            </List>
        );
    }
}
*/
export default NotesPrev;