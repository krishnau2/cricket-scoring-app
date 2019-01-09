import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="card">
          <span className="score">05 / 01</span><br />
          <span className="overs">Overs: 0.5</span>
        </div>
        <div className="points-wrap">
          <button className="point">1</button>
          <button className="point">2</button>
          <button className="point">3</button>
          <button className="point">4</button>
          <button className="point">6</button>
        </div>
        <div className="match-actions-wrap">
          <button className="match-actions " disabled="disabled">Wicket !</button>
          <button className="match-actions " disabled="disabled">No Ball</button>
          <button className="match-actions" disabled="disabled">Wide</button>
        </div>
      </div>
    );
  }
}

export default App;
