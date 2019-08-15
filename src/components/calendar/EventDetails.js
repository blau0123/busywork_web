import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

/*
Component that shows a specific event's details 
*/
class EventDetail extends React.Component{
    render(){
        const thisEvent = this.props.location.state.event;
        return(
            <div className="bg-container">
                <div style={{margin: '100px'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px'}} className="signin-container">
                                <h3>{thisEvent.title}</h3>
                                <p>{thisEvent.description}</p>
                                <p style={{color: 'grey'}}>
                                    12 August at 9pm
                                    <br />
                                    {thisEvent.location}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
    
}

export default EventDetail;