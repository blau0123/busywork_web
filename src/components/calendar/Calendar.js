import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// styles for each grid item (notes, todos, events)
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100%',
}

class Calendar extends React.Component{
    render(){
        return(
            <div className="container" style={{margin: '25px'}}>
                <Grid container justify='flex-start' 
                    spacing={3} >
                        <Grid item className='calendar-container' xs={7} 
                            style={{margin:'10px'}} >
                                <Card style={grid_items_styles}>
                                    <CardContent>
                                        <h3> yeet </h3>
                                    </CardContent>
                                </Card>
                        </Grid>
                        <Grid item className='event-list-container' xs={12} sm={5}
                            style={{margin:'10px'}}>
                                <Card style={grid_items_styles}>
                                    <CardContent>
                                        <h3> yeet </h3>
                                    </CardContent>
                                </Card>
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default Calendar;