import React from 'react';

import EventList from './EventList';

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
class Calendar extends React.Component{
    render(){
        return(
            <div className="container" style={{margin: '25px'}}>
                <Grid container justify='flex-start' 
                    direction='row'
                    spacing={3} >
                        <Grid item className='calendar-container' xs={8}>
                                <Card style={grid_items_styles}>
                                    <CardContent>
                                        <h3> yeet </h3>
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item className='event-list-container' xs={4}>
                                <EventList />
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default Calendar;