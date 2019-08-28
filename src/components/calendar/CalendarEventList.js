import React from 'react';

import EventList from './EventList';
import Calendar from './Calendar';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// styles for each grid item (notes, todos, events)
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100vh',
}

/*
Shows the actual calendar and a list of upcoming events
*/
class CalendarEventList extends React.Component{
    render(){
        return(
            <div className="container" style={{margin: '25px'}}>
                <Grid container justify='flex-start' 
                    direction='row'
                    spacing={3} >
                        <Grid item className='calendar-container' xs={12} md={8}>
                            <Calendar />
                        </Grid>
                        <Grid item className='event-list-container' xs={12} md={4}>
                            <EventList />
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default CalendarEventList;