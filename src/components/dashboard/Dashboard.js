import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import NotesPrev from './NotesPrev';
import TodosPrev from './TodosPrev';
import EventsPrev from './EventsPrev';
import GridNoteTitle from './GridNoteTitle';
import GridTodoTitle from './GridTodoTitle';
import GridCalendarTitle from './GridCalendarTitle';

// styles for each grid item (notes, todos, events)
const todo_event_grid_styles = {
    background: '#F9F9F9',
    height: '50vh',
    overflow: 'auto',
}

const note_grid_styles = {
    background: '#F9F9F9',
    height: '120vh',
    overflow: 'auto',
}

/*
Main/home component that displays list summaries of most important notes and todos,
and upcoming events so that the user can quickly get a feel for his/her upcoming week
*/
class Dashboard extends React.Component{
    render(){
        /* sort notelist by time last updated
        if (this.props.noteList){
            this.props.noteList.sort((note1, note2) => {
                return (note1.lastUpdated.seconds > note2.lastUpdated.seconds) ? -1 : 1
            })
        }
        */

        // sort eventlist by closest starttime to now
        return(
            <div className="root" style={{margin: '25px'}}>
                <Grid container justify='flex-start' direction='row' spacing={3} 
                alignItems='stretch' wrap='wrap'>
                    {/* notes grid item */}
                    <Grid item className="notes-item" sm={12} md={7} style={{margin: '10px'}}>
                        <GridNoteTitle />
                        <Card style={note_grid_styles}>
                            <CardContent>
                                <NotesPrev noteList={this.props.noteList} />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* imbedded grid to allow notes and todos/events to be side by side */}
                    <Grid container item direction='row' sm={12} md={5} spacing={3} justify='flex-end'>
                        {/* todo grid item */}
                        <Grid item className="todos-item" xs={12} style={{margin: '10px'}}>
                            <GridTodoTitle />
                            <Card style={todo_event_grid_styles}>
                                <CardContent>
                                    <TodosPrev todoList={this.props.todoList}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* events grid item */}
                        <Grid item className="events-item" sm={12} md={12} style={{margin: '10px'}}>
                            <GridCalendarTitle />
                            <Card style={todo_event_grid_styles}>
                                <CardContent>
                                    <EventsPrev eventList={this.props.eventList}/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

// allow dashboard to access certain props from store
const mapStateToProps = (storeState) => {
    console.log(storeState.firebase.auth.uid);
    return({
        // grab data from firestore state prop
        noteList: storeState.firestore.ordered.notes,
        todoList: storeState.firestore.ordered.todos,
        eventList: storeState.firestore.ordered.events,
    });
}

export default compose(firestoreConnect([{collection:'notes', orderBy:['lastUpdated','desc']}, 
                                         {collection:'todos'},
                                         {collection:'events', orderBy:['startTime', 'asc']}]), 
    connect(mapStateToProps))(Dashboard);