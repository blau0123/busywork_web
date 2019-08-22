import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

// styles for titles of dashboard items
const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    padding: '15px',
}

/*
Component used as the title for the events list in Dashboard to allow
a link to the calendar when clicked
*/
const GridCalendarTitle = () => {
    return(
        // aligns the title and the add button along the header of the card
        <Grid container item direction='row' xs={12} justify='flex-end'
            style={{fontFamily:'Playfair Display, serif'}}>
            <Link to='/calendar' style={title_styles}>Events</Link>
            <div style={{padding: '15px'}}>
                <Link to='/addevent' style={title_styles}>Add</Link>
            </div>
        </Grid>
    )
}

export default GridCalendarTitle;