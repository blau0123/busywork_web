import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import NotesPrev from './NotesPrev';
import TodosPrev from './TodosPrev';
import EventsPrev from './EventsPrev';

// styles for each grid item (notes, todos, events)
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100%',
}

// styles for titles of dashboard items
const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    paddingLeft: '25px',
}

/*
Main/home component that displays list summaries of most important notes and todos,
and upcoming events so that the user can quickly get a feel for his/her upcoming week
*/
class Dashboard extends React.Component{
    render(){
        return(
            <div className="root" style={{margin: '25px'}}>
                <Grid container justify='flex-start' direction='row' spacing={3} 
                alignItems='stretch' wrap='wrap'>
                    {/* notes grid item */}
                    <Grid item className="notes-item" xs={7} style={{margin: '10px'}}>
                        <Card style={grid_items_styles}>
                            <CardContent>
                                <Link to='/' style={title_styles}>Notes</Link>
                                <NotesPrev />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* imbedded grid to allow notes and todos/events to be side by side */}
                    <Grid container item direction='row' xs={5} spacing={3} justify='flex-end'>
                        {/* todo grid item */}
                        <Grid item className="todos-item" xs={12} style={{margin: '10px'}}>
                            <Card style={grid_items_styles}>
                                <CardContent>
                                    <Link to='/' style={title_styles}>Todos</Link>
                                    <TodosPrev />
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* events grid item */}
                        <Grid item className="events-item" xs={12} style={{margin: '10px'}}>
                            <Card style={grid_items_styles}>
                                <CardContent>
                                    <Link to='/' style={title_styles}>Events</Link>
                                    <EventsPrev />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;