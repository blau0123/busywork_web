import React from 'react';
import EventSummary from '../calendar/EventSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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