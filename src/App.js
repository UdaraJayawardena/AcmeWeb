import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/service' component={Service}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
