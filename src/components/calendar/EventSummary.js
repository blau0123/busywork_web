import React from 'react';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const list_item_styles = {
    textDecoration: 'none',
    color: 'black',
}

/*
Shows summary of a specified upcoming events on the dashboard, which makes
it quicker than traveling to then going through your calendar
*/
class EventSummary extends React.Component{
    render(){
        const event = this.props.event;

        // convert timestamp to date objects to format
        console.log(event);
        const startTimeAsDate = new Date(event.startTime.seconds * 1000);
        const endTimeAsDate = new Date(event.endTime.seconds * 1000)

        return(
            <div className="container" style={{width: '100%'}}>
                <Link to={'/events/' + event.id} style={list_item_styles}>
                    <Card>
                        <CardContent>
                            {/* holds text in each list item of event list */}
                            <div className="todo-content">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <p style={{color: 'grey'}}>
                                    {startTimeAsDate.toLocaleString()} - {endTimeAsDate.toLocaleString()}
                                    <br />
                                    {event.location}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        )
    }
}

export default EventSummary;