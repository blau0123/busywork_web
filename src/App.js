import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import NotesList from './components/notes/NotesList';
import NoteDetail from './components/notes/NoteDetail';
import TodoList from './components/todos/TodoList';
import Calendar from './components/calendar/Calendar';
import SignUp from './components/auth/SignUp';

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
            <Route path="/notes/:id" component={NoteDetail} />
            <Route exact path="/todos" component={TodoList} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
