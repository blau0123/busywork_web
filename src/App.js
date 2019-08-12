import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/layout/NavBar';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <NavBar />
        <h1>yeet</h1>
      </BrowserRouter>
    );
  }
}

export default App;
