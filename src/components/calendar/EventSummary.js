import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
                </Card>
            </div>
        )
    }
}

export default EventSummary;