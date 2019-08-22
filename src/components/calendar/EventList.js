import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import EventSummary from './EventSummary'

// styles for each grid item (notes, todos, events)
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100vh',
}

/*
In calendar component, this component is used to show the list
of upcoming events
*/
class EventList extends React.Component{
    render(){
        const eventList = this.props.eventList;
        return(
            <div className="bg-container">
                <div className="container">
                    <Card style={grid_items_styles}>
                        <CardContent>
                            <h3 style={{paddingLeft:'25px'}}>Your Upcoming Events</h3>
                            <List className="list-container" aria-label="previews">
                                {
                                    eventList && eventList.map(event => {
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

export default compose(firestoreConnect([{collection:'events'}]), 
    connect(mapStateToProps))(EventList);