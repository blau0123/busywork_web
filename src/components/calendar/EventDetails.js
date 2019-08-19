import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
Component that shows a specific event's details 
*/
class EventDetail extends React.Component{
    render(){
        const thisEvent = this.props.event;
        if (thisEvent){
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
        else{
            return(
                <div className="container">
                    <h4>Event is loading...</h4>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, componProps) => {
    const id = componProps.match.params.id;
    const eventList = state.firestore.data.events;

    // check if events is nonempty to get a specific event with the id
    const event = eventList ? eventList[id] : null;
    return {
        event: event,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'events',
    }])
)(EventDetail);