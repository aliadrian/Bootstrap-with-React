import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'hover.css';

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Account from './components/Account';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/account" component={Account} />
        </div>
      </div>
    </Router>
  );
}

export default App;
