import React from 'react';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const list_item_styles = {
    textDecoration: 'none',
    color: 'black',
}

/*
Shows summary of upcoming events on the dashboard, which makes
it quicker than traveling to then going through your calendar
*/
class EventSummary extends React.Component{
    render(){
        const event = this.props.event;
        return(
            <div className="container" style={{width: '100%'}}>
                <Card>
                    <Link to={{
                        pathname: '/events/' + event.id,
                        state: {
                            event: event,
                        },
                    }} style={list_item_styles}>
                        <CardContent>
                            {/* holds text in each list item of event list */}
                            <div className="todo-content">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <p style={{color: 'grey'}}>
                                    12 August at 9pm
                                    <br />
                                    {event.location}
                                </p>
                            </div>
                        </CardContent>
                    </Link>
                </Card>
            </div>
        )
    }
}

export default EventSummary;