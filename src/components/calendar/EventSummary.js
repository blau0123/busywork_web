import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {deleteEvent} from '../../redux/store/actions/eventActions';

const list_item_styles = {
    textDecoration: 'none',
    color: 'black',
    fontFamily:'Playfair Display, serif',
}

const delete_styles = {
    color: 'black',
    fontFamily:'Playfair Display, serif',
    float:'right'
}

/*
Shows summary of a specified upcoming events on the dashboard, which makes
it quicker than traveling to then going through your calendar
*/
class EventSummary extends React.Component{
    constructor(){
        super();
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent(){
        const eventToDelete = this.props.event;
        this.props.deleteEvent(eventToDelete);
    }

    render(){
        const event = this.props.event;

        // convert timestamp to date objects to format
        const startTimeAsDate = new Date(event.startTime.seconds * 1000);
        const endTimeAsDate = new Date(event.endTime.seconds * 1000)

        return(
            <div className="container" style={{width: '100%'}}>
                <Link to={'/events/' + event.id} style={list_item_styles}>
                    <Card>
                        <CardContent>
                            <Button style={delete_styles} onClick={this.deleteEvent}>
                                <Link to='/dashboard' style={list_item_styles}>X</Link>
                            </Button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (event) => dispatch(deleteEvent(event)),
    }
}

export default connect(null, mapDispatchToProps)(EventSummary);