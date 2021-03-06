import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/layout/Home';
import Dashboard from './components/dashboard/Dashboard';

import NotesList from './components/notes/NotesList';
import NoteDetail from './components/notes/NoteDetail';
import AddNote from './components/notes/AddNote';

import TodoList from './components/todos/TodoList';
import AddTodo from './components/todos/AddTodo';

import Calendar from './components/calendar/Calendar';
import EventDetails from './components/calendar/EventDetails';
import AddEvent from './components/calendar/AddEvent';
import CalendarEventList from './components/calendar/CalendarEventList';

class App extends React.Component{
  render(){
    // check if user is logged in; if yes, show navbar, if no, then don't
    const {auth} = this.props;
    const showNavBar = auth.uid ? <NavBar /> : null;

    return(
      <BrowserRouter>
        <div>
          {showNavBar}
          
          {/* Show only one of dashboard, notes, todos, or calendars at a time */}
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/dashboard" component={Dashboard} />

            <PrivateRoute exact path="/notes" component={NotesList} />
            <PrivateRoute exact path="/notes/:id" component={NoteDetail} />
            <PrivateRoute path="/addnote" component={AddNote} />

            <PrivateRoute exact path="/todos" component={TodoList} />
            <PrivateRoute path="/addtodo" component={AddTodo} />

            <PrivateRoute path="/calendar" component={CalendarEventList} />
            <PrivateRoute path="/events/:id" component={EventDetails} />
            <PrivateRoute path="/addevent" component={AddEvent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(App);
