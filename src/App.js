import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
            <Route exact path="/" component={Dashboard} />

            <Route exact path="/notes" component={NotesList} />
            <Route exact path="/notes/:id" component={NoteDetail} />
            <Route path="/addnote" component={AddNote} />

            <Route exact path="/todos" component={TodoList} />
            <Route path="/addtodo" component={AddTodo} />

            <Route path="/calendar" component={Calendar} />
            <Route path="/events/:id" component={EventDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
