import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

// styles for titles of dashboard items
const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    paddingLeft: '25px',
}

/*
Component for the title of the todo list in Dashboard that allows a link
to the todo list when clicked
*/
const GridTodoTitle = () => {
    return(
        // aligns the title and the add button along the header of the card
        <Grid container item direction='row' xs={12} justify='flex-end'>
            <Link to='/todos' style={title_styles}>Todos</Link>
            <div style={{marginRight: '25px'}}>
                <Link to='/addtodo' style={title_styles}>Add</Link>
            </div>
        </Grid>
    )
}

export default GridTodoTitle;