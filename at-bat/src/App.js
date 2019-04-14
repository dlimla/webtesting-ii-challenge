import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Display from './display/display.js'
import Dashboard from './dashboard/Dashboard.js'

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    foul: 0,
    hits:0
  }

  onStrike = () => {
    if(this.state.strikes === 0 || 1) {
      return this.setState({ strikes: + 1 })
    }
    if(this.state.strikes === 2) {
      return this.setState({ strikes: 0, balls:0 })
    }
  }

  onBall = () => {
    if(this.state.balls === 0 || 1|| 2 ) {
      return this.setState({balls: + 1})
    }
    else {
      return this.setState({balls: 0})
    }
  }

  onFoul = () => {
    if(this.state.foul === 0 || 1) {
      if(this.state.strikes === 0 || 1)
      return this.setState({ foul: + 1, strikes: + 1})
    }
    else {
      return this.state
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Hello Batters!!!</h2>
        <Dashboard 
          onStrike={this.onStrike}
          onBall={this.onBall}
          onFoul={this.onFoul}
          onHit={this.onHit}
          />
        <Display 
          balls={this.state.balls}
          strikes={this.state.strikes}/>
      </div>
    );
  }
}

export default App;
