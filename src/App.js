import React from 'react';
import logo from './logo.svg';
import {
  BrowseRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { initializeGA } from './utils/ga';

import Notes from './views/Notes';

initializeGA();

class App extends React.Component{
  render(){
    return(
      <BrowseRouter>
        <switch>
          <Route path = {['/notes-app/:folder/:note_id', '/notes-app/:folder', '/notes-app']}
          component={Notes} 
          />
        </switch>
        <Redirect from='/' to='/notes-app' />;
      </BrowseRouter>
    )
  }
}

export default App;