import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
