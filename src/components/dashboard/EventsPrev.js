import React from 'react';
import EventSummary from '../calendar/EventSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

/* pulls in data from firebase and passes data of each notes item
as props into each notesummary so the notesummary component can render
each individual note given the props

Inside of dashboard, shows list of summaries of upcoming events
*/
class EventsPrev extends React.Component{
    render(){
        return(
            <List aria-label="previews">
                <ListItem button>
                    <EventSummary />
                </ListItem>
                <ListItem button>
                    <EventSummary />
                </ListItem>
                <ListItem button>
                    <EventSummary />
                </ListItem>
                <ListItem button>
                    <EventSummary />
                </ListItem>
            </List>
        );
    }
}

export default EventsPrev;