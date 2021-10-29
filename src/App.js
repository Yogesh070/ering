import React from 'react';
import './App.css';
import Home from './pages'
import Terminology from './pages/Terminology.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/terminology' component={Terminology} exact/>
      </Switch>
    </Router>
  );
}

export default App;
