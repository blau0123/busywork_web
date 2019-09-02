import React from 'react';

import EventList from './EventList';
import Calendar from './Calendar';

import Grid from '@material-ui/core/Grid';
import {Spring} from 'react-spring/renderprops';

/*
Shows the actual calendar and a list of upcoming events
*/
class CalendarEventList extends React.Component{
    render(){
        return(
            <div className="container" style={{margin: '25px'}}>
               <Spring from={{opacity:0}} to={{opacity:1}} config={{duration:500}}>
                            {props => (
                                <div style={props}>
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
                            )}
                </Spring>
            </div>
        )
    }
}

export default CalendarEventList;