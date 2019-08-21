import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';

import NotesList from './components/notes/NotesList';
import NoteDetail from './components/notes/NoteDetail';
import AddNote from './components/notes/AddNote';

import TodoList from './components/todos/TodoList';
import AddTodo from './components/todos/AddTodo';

import Calendar from './components/calendar/Calendar';
import EventDetails from './components/calendar/EventDetails';
import AddEvent from './components/calendar/AddEvent';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar />
          {/* Show only one of dashboard, notes, todos, or calendars at a time */}
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Dashboard} />

            <PrivateRoute exact path="/notes" component={NotesList} />
            <PrivateRoute exact path="/notes/:id" component={NoteDetail} />
            <PrivateRoute path="/addnote" component={AddNote} />

            <PrivateRoute exact path="/todos" component={TodoList} />
            <PrivateRoute path="/addtodo" component={AddTodo} />

            <PrivateRoute path="/calendar" component={Calendar} />
            <PrivateRoute path="/events/:id" component={EventDetails} />
            <PrivateRoute path="/addevent" component={AddEvent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
