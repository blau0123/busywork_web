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
        const eventList = this.props.eventList;

        return(
            <div>
                {
                    /* ternary to determine whether to show the list
                    or tell the user there are no events
                    */
                    eventList ?
                    <List aria-label="previews">
                    {eventList && eventList.map(event => {
                        return(
                            <ListItem button key={event.id}>
                                <EventSummary event={event}/>
                            </ListItem>
                        )
                    })}
                    </List> :
                    <h3 style={{padding: '25px', textAlign: 'center'}}>
                        No upcoming events currently! 
                    </h3>
                }
            </div>
        );
    }
}

export default EventsPrev;