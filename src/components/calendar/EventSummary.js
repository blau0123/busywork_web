import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
Shows summary of upcoming events on the dashboard, which makes
it quicker than traveling to then going through your calendar
*/
class EventSummary extends React.Component{
    render(){
        return(
            <div className="container" style={{width: '100%'}}>
                <Card>
                    <CardContent>
                        {/* holds text in each list item of event list */}
                        <div className="todo-content">
                            <h3>your event</h3>
                            <p style={{color: 'grey'}}>
                                12 August at 9pm
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default EventSummary;