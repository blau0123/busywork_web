import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Spring} from 'react-spring/renderprops';

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

const welcome_styles = {
    fontFamily:'Playfair Display, serif',
    fontSize:'25px',
    left:'10vw',
    top:'5vh',
}

/*
Main/home component that displays list summaries of most important notes and todos,
and upcoming events so that the user can quickly get a feel for his/her upcoming week
*/
class Dashboard extends React.Component{
    constructor(){
        super();
        this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    getCurrentUser(user){
        return user.id === this.props.auth.uid;
    }

    render(){
        const user = this.props.usersList ? this.props.usersList.find(this.getCurrentUser) : null;
        const userNoteList = this.props.noteList ? this.props.noteList.filter(note => note.authorId === this.props.auth.uid) : null;
        const userTodoList = this.props.todoList ? this.props.todoList.filter(todo => todo.authorId === this.props.auth.uid) : null;
        const userEventList = this.props.eventList ? this.props.eventList.filter(event => event.authorId === this.props.auth.uid) : null;

        return(
            <div className="root" style={{margin: '25px'}}>
                {user ? 
                    <h3 style={welcome_styles}>{
                        "Welcome back, " + user.firstName}
                    </h3>: null}
                <Grid container justify='flex-start' direction='row' spacing={3} 
                alignItems='stretch' wrap='wrap'>
                    {/* notes grid item */}
                    <Grid item className="notes-item" sm={12} md={7} style={{margin: '0 10px'}}>
                        <Spring from={{opacity: 0}} to={{opacity: 1}} 
                            config={{duration: 500, delay:500}}>
                            {props => (
                                <div style={props}>
                                    <GridNoteTitle />
                                    <Card style={note_grid_styles}>
                                        <CardContent>
                                            <NotesPrev noteList={userNoteList} />
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                        </Spring>
                    </Grid>
                    {/* imbedded grid to allow notes and todos/events to be side by side */}
                    <Grid container item direction='row' sm={12} md={5} spacing={3} justify='flex-end'>
                        {/* todo grid item */}
                        <Grid item className="todos-item" xs={12} style={{margin: '10px'}}>
                            <Spring from={{opacity: 0}} to={{opacity: 1}} 
                                config={{duration: 500, delay:500}}>
                                {props => (
                                    <div style={props}>
                                        <GridTodoTitle />
                                        <Card style={todo_event_grid_styles}>
                                            <CardContent>
                                                <TodosPrev todoList={userTodoList}/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )}
                            </Spring>
                        </Grid>
                        {/* events grid item */}
                        <Grid item className="events-item" sm={12} md={12} style={{margin: '10px'}}>
                            <Spring from={{opacity: 0}} to={{opacity: 1}} 
                                config={{duration: 500, delay:500}}>
                                {props => (
                                    <div style={props}>
                                        <GridCalendarTitle />
                                        <Card style={todo_event_grid_styles}>
                                            <CardContent>
                                                <EventsPrev eventList={userEventList}/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )}
                            </Spring>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

// allow dashboard to access certain props from store
const mapStateToProps = (storeState) => {
    return({
        // grab data from firestore state prop
        noteList: storeState.firestore.ordered.notes,
        todoList: storeState.firestore.ordered.todos,
        eventList: storeState.firestore.ordered.events,
        usersList: storeState.firestore.ordered.users,
        auth: storeState.firebase.auth,
    });
}

export default compose(firestoreConnect([{collection:'notes', orderBy:['lastUpdated','desc']}, 
                                         {collection:'todos'},
                                         {collection:'events', orderBy:['startTime', 'asc']},
                                         {collection:'users'},]), 
    connect(mapStateToProps))(Dashboard);