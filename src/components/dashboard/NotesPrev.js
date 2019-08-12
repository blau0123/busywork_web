import React from 'react';
import NoteSummary from '../notes/NoteSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

/* pulls in data from firebase and passes data of each notes item
as props into each notesummary so the notesummary component can render
each individual note given the props
*/
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

export default NotesPrev;