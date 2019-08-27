import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import EventSummary from './EventSummary'
import GridCalendarTitle from '../dashboard/GridCalendarTitle';

// styles for each grid item (notes, todos, events)
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100vh',
    overflowY:'scroll',
}

const eventlist_title_styles = {
    overflow:'hidden',
    display:'inline-block',
    width:'100%',
    borderBottom:'1px solid #000',
    padding:'5px',
    leftMargin:'5px',
}

/*
In calendar component, this component is used to show the list
of upcoming events
*/
class EventList extends React.Component{
    render(){
        const eventList = this.props.eventList;
        const currTime = new Date();
        return(
            <div className="bg-container">
                <div className="container">
                    <Card style={grid_items_styles}>
                        <CardContent>
                            <GridCalendarTitle />
                            <p style={eventlist_title_styles}>Upcoming Events!</p>
                            <List className="future-event-container" aria-label="previews">
                                {
                                    eventList && eventList.map(event => {
                                        // only show upcoming events in this list
                                        const startTimeAsDate = new Date(event.startTime.seconds * 1000);
                                        if (startTimeAsDate < currTime){
                                            return null;
                                        }
                                        return(
                                            <ListItem button key={event.id}>
                                                {/* passing in each individual note to render that specific note as a
                                                NoteSummary component */}
                                                <EventSummary event={event} key={event.id} />
                                            </ListItem>
                                        )
                                })}
                            </List>
                            <p style={eventlist_title_styles}>Past Events!</p>
                            <List className="past-event-container" aria-label="previews">
                                {
                                    eventList && eventList.map(event => {
                                        // only show past events in this list
                                        const startTimeAsDate = new Date(event.startTime.seconds * 1000);
                                        if (startTimeAsDate > currTime){
                                            return null;
                                        }
                                        return(
                                            <ListItem button key={event.id}>
                                                {/* passing in each individual note to render that specific note as a
                                                NoteSummary component */}
                                                <EventSummary event={event} key={event.id} />
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
        eventList: storeState.firestore.ordered.events,
    });
}

export default compose(firestoreConnect([{collection:'events', orderBy:['startTime','asc']}]), 
    connect(mapStateToProps))(EventList);