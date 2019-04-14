import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Display from './display/display.js'
import Dashboard from './dashboard/Dashboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello Batters!!!</h2>
        <Dashboard />
        <Display />
      </div>
    );
  }
}

export default App;
