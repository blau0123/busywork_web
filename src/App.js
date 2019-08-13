import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar />
          {/* Show only one of dashboard, notes, todos, or calendars at a time */}
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
