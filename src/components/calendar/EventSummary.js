import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class EventSummary extends React.Component{
    render(){
        return(
            <div className="container" style={{width: '100%'}}>
                <Card>
                    <CardContent>
                        <div className="todo-content">
                            <h3>your event</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default EventSummary;