import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div className='content'>
          <Switch>
            <Route path='/weather'>
              <div>Weather</div>
            </Route>
            <Route path='/timezones'>
              <div>Timezones</div>
            </Route>
            <Route path='/'>
              <div id='map'>Map</div>
            </Route>
            <Route path='/index.html'>
              <div>Index</div>
            </Route>
            <Route>
              <div>NotFound</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
